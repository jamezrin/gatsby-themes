import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import 'prismjs/themes/prism-okaidia.css';

import Article, { ArtTitle, ArtSubtitle, Content } from '../shared/Article';

const Post = props => {
  const {
    post: { title, subTitle, body },
  } = props;

  return (
    <Article>
      <ArtTitle>{title}</ArtTitle>
      <ArtSubtitle>{subTitle}</ArtSubtitle>
      <Content>
        <MDXRenderer>{body}</MDXRenderer>
      </Content>
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
