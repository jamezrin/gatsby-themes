import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';

const Sidebar = styled.aside`
  --sidebarPadding: ${props => props.theme.dimensions.sidebar.padding};
  --sidebarWidth: ${props => props.theme.dimensions.sidebar.width};
  --sidebarBg: ${props => props.theme.palette.white};

  background: var(--sidebarBg);
  height: 100vh;
  left: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--sidebarPadding);
  top: 0;
  width: var(--sidebarWidth);

  :after {
    content: '';
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    top: ${props => props.theme.spaces.xl};
    bottom: ${props => props.theme.spaces.xl};
    width: 1px;
    border-right: 1px solid ${props => props.theme.colors.line};
  }
`;

export default props => {
  return (
    <Sidebar>
      <Header />
    </Sidebar>
  );
};
