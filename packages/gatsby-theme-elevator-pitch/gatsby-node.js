const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');

const SLUG_SEPARATOR = '___';

exports.onPreBootstrap = ({ reporter }) => {
  const dirs = [
    'content/elevator-pitch/screens',
    'content/elevator-pitch/images'
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      fs.mkdirSync(dir);
    }
  })
};


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    if (source === 'elevator-pitch-screens') {
      const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

      let position = null;

      if (separatorExists) {
        const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
        position = filePath.substring(1, separatorPosition);
      }

      createNodeField({
        node,
        name: `position`,
        value: position
      });
      createNodeField({
        node,
        name: `source`,
        value: source
      });
    }
  }
};
