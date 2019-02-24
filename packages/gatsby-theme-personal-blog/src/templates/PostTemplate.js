import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

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

  return (
    <article>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;
