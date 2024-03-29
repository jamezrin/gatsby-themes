import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyles from '../../styles/GlobalStyles';
import GlobalFonts from '../../styles/GlobalFonts';
import Navigator from '../Navigator';
import Sidebar from '../Sidebar';
import PageContainer from './PageContainer';
import ActionsBar from '../ActionsBar';
import Footer from '../shared/Footer';
import { UIProvider } from '../../context/UIState';

import theme from '../../styles/theme';

const Layout = props => {
  const { children, location } = props;

  return (
    <ThemeProvider theme={theme}>
      <UIProvider location={location}>
        <GlobalStyles />
        <GlobalFonts />
        <PageContainer>
          <main>{children}</main>
          <Footer />
        </PageContainer>
        <Navigator />
        <Sidebar />
        <ActionsBar />
      </UIProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
