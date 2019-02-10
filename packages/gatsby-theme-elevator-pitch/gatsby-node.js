const { createFilePath } = require(`gatsby-source-filesystem`);

const SLUG_SEPARATOR = '___';

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
