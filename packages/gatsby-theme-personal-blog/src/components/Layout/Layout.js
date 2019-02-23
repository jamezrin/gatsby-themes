import React from 'react';
import PropTypes from 'prop-types';

import Navigator from '../Navigator';

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <Navigator />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
