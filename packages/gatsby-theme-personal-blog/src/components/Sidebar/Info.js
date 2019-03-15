import React from 'react';
import styled from '@emotion/styled';

import SidebarInfo from '../../../content/pieces/SidebarInfo.mdx';

const Info = styled(SidebarInfo)`
  font-size: ${props => props.theme.fontSizes.s};
  color: #666;
  line-height: 1.5;
  padding: 0 ${props => props.theme.spaces.m};
  opacity: 1;
  transition: 0.5s ease;

  .navigatorAside &,
  .navigatorSlidingUp & {
    opacity: 0;
  }
`;

export default props => {
  return <Info />;
};
