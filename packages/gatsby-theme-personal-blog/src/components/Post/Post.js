import React from 'react';
import PropTypes from 'prop-types';

import 'prismjs/themes/prism-okaidia.css';
import Main from '../shared/Main';
import Article, { ArtTitle, ArtSubtitle, Content } from '../shared/Article';

const Post = props => {
  const {
    post: { title, subTitle, html },
  } = props;

  return (
    <Main>
      <Article>
        <ArtTitle>{title}</ArtTitle>
        <ArtSubtitle>{subTitle}</ArtSubtitle>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
    </Main>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
