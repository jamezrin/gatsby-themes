const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');

const SLUG_SEPARATOR = '__';

exports.onPreBootstrap = ({ reporter }) => {
  const dirs = [
    'content',
    'content/personal-blog',
    'content/personal-blog/posts',
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  });
};

let userCreatedOwnContent = false;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    const eligibleSources = ['personal-blog-posts', 'personal-blog-demo-posts'];

    if (eligibleSources.includes(source)) {
      if (source === 'personal-blog-posts') {
        userCreatedOwnContent = true;
      }

      if (userCreatedOwnContent && source === 'personal-blog-demo-posts') {
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

      if (source !== 'parts') {
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
      if (slug) {
        createNodeField({
          node,
          name: `source`,
          value: source,
        });
      }
    }
  }
};
