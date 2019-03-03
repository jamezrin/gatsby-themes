import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

//import Post from '../components/Post';

export const postQuery = graphql`
  query PageBySlug($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      htmlAst
      fields {
        slug
        order
      }
      frontmatter {
        title
      }
    }
  }
`;

const PageTemplate = ({ data }) => {
  const {
    page: {
      html,
      frontmatter: { title },
    },
  } = data;

  const page = {
    title,
    html,
  };

  return <div page={page}>asdfasdfas</div>;
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PageTemplate;
