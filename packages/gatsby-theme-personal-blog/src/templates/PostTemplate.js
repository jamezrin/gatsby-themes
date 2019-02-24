import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Post from '../components/Post';

require('prismjs/themes/prism-okaidia.css');

export const postQuery = graphql`
  query PostBySlug($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      fields {
        slug
        date
      }
      frontmatter {
        title
        subTitle
      }
    }
  }
`;

const PostTemplate = ({ data }) => {
  const {
    post: {
      html,
      frontmatter: { title, subTitle },
    },
  } = data;

  const post = {
    title,
    subTitle,
    html,
  };

  return <Post post={post} />;
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;
