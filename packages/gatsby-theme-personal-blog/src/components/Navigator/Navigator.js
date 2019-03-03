import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { UIContext } from '../../context/UIState';
import PostList from './PostList';
import navigatorData from './NavigatorData';

const Navigator = styled.nav`
  background: ${props => props.theme.palette.white};
  height: 100vh;
  left: 0;
  overflow-y: auto;
  padding: ${props => props.theme.spaces.xs};
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: ${props => props.theme.spaces.m};

    &.slidingIn,
    &.featured {
      transform: translate3d(
        ${props => props.theme.dimensions.sidebar.width},
        0,
        0
      );
      width: calc(100% - ${props => props.theme.dimensions.sidebar.width});
    }

    &.slidingOut,
    &.slidedOut {
      transform: translate3d(
        calc((100% - ${props => props.theme.dimensions.sidebar.width}) * -1),
        0,
        0
      );
      width: calc(100% - ${props => props.theme.dimensions.sidebar.width});
    }

    &.slidingDown,
    &.slidingUp,
    &.slidingOut,
    &.slidingIn {
      transition: 0.5s ease;
    }

    &.slidingDown,
    &.slidedDown,
    &.slidingUp,
    &.aside {
      padding: 0;
      width: ${props => props.theme.dimensions.sidebar.width};
      z-index: 1;
    }

    &.aside,
    &.slidingUp,
    &.slidingDown,
    &.slidedDown {
      padding: 0;
      width: ${props => props.theme.dimensions.sidebar.width};
      z-index: 1;
    }

    &.slidingDown,
    &.slidedDown {
      transform: translate3d(0, 100vh, 0);
      height: calc(
        100vh - ${props => props.theme.dimensions.sidebar.header.minHeight}
      );
    }

    &.aside,
    &.slidingUp {
      transform: translate3d(
        0,
        ${props => props.theme.dimensions.sidebar.header.minHeight},
        0
      );
      height: calc(
        100vh - ${props => props.theme.dimensions.sidebar.header.minHeight}
      );
    }
  }
`;

export default props => {
  const { navigatorState } = useContext(UIContext);
  const { posts } = navigatorData();

  return (
    <Navigator className={navigatorState}>
      <PostList posts={posts} />
    </Navigator>
  );
};
