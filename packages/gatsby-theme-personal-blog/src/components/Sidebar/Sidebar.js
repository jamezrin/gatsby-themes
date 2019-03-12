import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { UIContext } from '../../context/UIState';
import Header from './Header';
import SocialLinks from './SocialLinks';
import Footer from '../shared/Footer';
import Info from './Info';

const Sidebar = styled.aside`
  background: ${props => props.theme.palette.white};
  height: 100vh;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.dimensions.sidebar.padding};
  top: 0;
  width: ${props => props.theme.dimensions.sidebar.width};
  z-index: 2;

  a {
    text-decoration: none;
  }

  :after {
    content: '';
    position: absolute;
    right: -1px;
    display: flex;
    flex-direction: column;
    top: ${props => props.theme.spaces.xl};
    bottom: ${props => props.theme.spaces.xl};
    width: 1px;
    border-right: 1px solid ${props => props.theme.colors.line};
  }
`;

const addPrefix = (prefix, str) =>
  prefix + str.charAt(0).toUpperCase() + str.slice(1);

export default props => {
  const { navigatorState, slideInNavigator } = useContext(UIContext);

  return (
    <Sidebar className={addPrefix('navigator', navigatorState)}>
      <Header slideInNavigator={slideInNavigator} />
      <Info />
      <SocialLinks />
      <Footer inSidebar />
    </Sidebar>
  );
};
