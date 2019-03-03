import React from 'react';
import styled from '@emotion/styled';

import Header from './Header';

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
