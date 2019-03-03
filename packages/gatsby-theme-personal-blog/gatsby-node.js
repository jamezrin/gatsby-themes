const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const _ = require('lodash');

const SLUG_SEPARATOR = '_';

exports.onPreBootstrap = ({ reporter }) => {
  const dirs = [
    'content',
    'content/personal-blog',
    'content/personal-blog/posts',
    'content/personal-blog/pages',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};

let userCreatedOwnPosts = false;
let userCreatedOwnPages = false;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    const eligiblePostSources = [
      'personal-blog-posts',
      'personal-blog-demo-posts',
    ];

    if (eligiblePostSources.includes(source)) {
      if (source === 'personal-blog-posts') {
        userCreatedOwnPosts = true;
      }

      if (userCreatedOwnPosts && source === 'personal-blog-demo-posts') {
        return;
      }

      const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

      let slug;
      let date;

      if (separatorExists) {
        const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
        const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
        slug =
          separatorPosition === 1
            ? null
            : `/${filePath.substring(slugBeginning)}`;
        date = filePath.substring(1, separatorPosition);
      } else {
        slug = filePath;
        date = null;
      }

      createNodeField({
        node,
        name: `source`,
        value: source,
      });

      if (slug) {
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        });
      }

      if (date) {
        createNodeField({
          node,
          name: `date`,
          value: date,
        });
      }
    }

    const eligiblePageSources = [
      'personal-blog-pages',
      'personal-blog-demo-pages',
    ];

    if (eligiblePageSources.includes(source)) {
      if (source === 'personal-blog-pages') {
        userCreatedOwnPages = true;
      }

      if (userCreatedOwnPages && source === 'personal-blog-demo-pages') {
        return;
      }

      const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

      let slug;
      let order;

      if (separatorExists) {
        const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
        const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
        slug =
          separatorPosition === 1
            ? null
            : `/${filePath.substring(slugBeginning)}`;
        order = filePath.substring(1, separatorPosition);
      } else {
        slug = filePath;
        order = null;
      }

      createNodeField({
        node,
        name: `source`,
        value: source,
      });

      if (slug) {
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        });
      }

      if (order) {
        createNodeField({
          node,
          name: `order`,
          value: order,
        });
      }
    }
  }
};

exports.createPages = ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/PostTemplate.js');
  const pageTemplate = require.resolve('./src/templates/PageTemplate.js');

  return graphql(
    `
      {
        allMarkdownRemark(
          filter: {
            fields: {
              source: {
                in: [
                  "personal-blog-posts"
                  "personal-blog-demo-posts"
                  "personal-blog-pages"
                  "personal-blog-demo-pages"
                ]
              }
              slug: { ne: null }
            }
          }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                source
                date
                order
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const edges = result.data.allMarkdownRemark.edges;

    edges.forEach((edge, index) => {
      createPage({
        path: edge.node.fields.slug,
        component:
          edge.node.fields.source === 'personal-blog-posts' ||
          edge.node.fields.source === 'personal-blog-demo-posts'
            ? postTemplate
            : pageTemplate,
        context: {
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};
