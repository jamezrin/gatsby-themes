import React from 'react';
import PropTypes from 'prop-types';

import 'prismjs/themes/prism-okaidia.css';
import Positioner from '../shared/Positioner';
import Main from '../shared/Main';
import Footer from '../shared/Footer';
import Article from '../shared/Article';

const Page = ({ children }) => {
  return (
    <Positioner>
      <Main>
        <Article>{children}</Article>
      </Main>
      <Footer />
    </Positioner>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
