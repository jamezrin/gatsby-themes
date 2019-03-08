import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyles from '../../styles/GlobalStyles';
import GlobalFonts from '../../styles/GlobalFonts';
import Navigator from '../Navigator';
import Sidebar from '../Sidebar';
import Page from '../shared/Page';
import Footer from '../shared/Footer';
import Main from '../shared/Main';
import { UIProvider } from '../../context/UIState';

import theme from '../../styles/theme';

const Layout = props => {
  const { children, location } = props;

  return (
    <ThemeProvider theme={theme}>
      <UIProvider location={location}>
        <GlobalStyles />
        <GlobalFonts />
        <Sidebar />
        <Navigator />
        <Page>
          <Main>{children}</Main>
          <Footer />
        </Page>
      </UIProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
