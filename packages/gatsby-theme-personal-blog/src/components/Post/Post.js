import React from 'react';
import PropTypes from 'prop-types';

import 'prismjs/themes/prism-okaidia.css';
import Positioner from '../shared/Positioner';
import Main from '../shared/Main';
import Footer from '../shared/Footer';
import Article, { ArtTitle, ArtSubtitle, Content } from '../shared/Article';

const Post = props => {
  const {
    post: { title, subTitle, html },
  } = props;

  return (
    <Positioner>
      <Main>
        <Article>
          <ArtTitle>{title}</ArtTitle>
          <ArtSubtitle>{subTitle}</ArtSubtitle>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Article>
      </Main>
      <Footer />
    </Positioner>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
