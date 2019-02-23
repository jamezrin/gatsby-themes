import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../../styles/GlobalStyles';
import GlobalFonts from '../../styles/GlobalFonts';

import Navigator from '../Navigator';

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <GlobalStyles />
      <GlobalFonts />
      <Navigator />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
