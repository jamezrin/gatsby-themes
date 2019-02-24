import React from 'react';
import PropTypes from 'prop-types';

import { Main, Article } from '../shared/containers';

const Post = props => {
  const {
    post: { title, subTitle, html },
  } = props;

  return (
    <Main>
      <Article>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Article>
    </Main>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
