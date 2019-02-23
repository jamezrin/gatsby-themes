import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

// const slideOut = props => {
//   const width = props.theme.sizes.dimensions.infoBox.width;

//   return keyframes`
//   50% {
//     transform: translate3d( calc( (100% - ${width}) * -1), 0, 0);
//   }
//   51% {
//     transform: translate3d( calc( (100% - ${width}) * -1), 100vh, 0);
//   }
//   100% {
//     transform: translate3d( calc( (100% - ${width}) * -1), 0, 0);
//   }
// `;
// };

export const Navigator = styled.nav`
  background: ${props => props.theme.colors.palette.white};
  border: 2px solid red;
  height: 100vh;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transform: translate3d(0, 0, 0);

  will-change: transform;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    transform: translate3d(
      ${props => props.theme.sizes.dimensions.infoBox.width},
      0,
      0
    );
    width: calc(100% - ${props => props.theme.sizes.dimensions.infoBox.width});

    &.slideOut {
      transition: 0.5s;
      transform: translate3d(
        calc(
          (100% - ${props => props.theme.sizes.dimensions.infoBox.width}) * -1
        ),
        0,
        0
      );
    }

    &.outside,
    &.slideUp,
    &.aside {
      width: ${props => props.theme.sizes.dimensions.infoBox.width};
    }

    &.outside {
      transform: translate3d(0, 100vh, 0);
    }

    &.slideUp {
      transition: 0.5s;
      transform: translate3d(0, 0, 0);
    }

    &.aside {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const PostList = styled.ul`
  list-style: none;
`;

export const PostListItem = styled.li`
  margin: 20px;

  a {
    display: flex;
  }
`;

export const TextContainer = styled.div``;

export const PostTitle = styled.h2`
  font-size: 2rem;

  .outside &,
  .slideUp &,
  .aside & {
    font-size: 1rem;
  }
`;

export const PostSubtitle = styled.h3`
  font-size: 1.3rem;

  .outside &,
  .slideUp &,
  .aside & {
    display: none;
  }
`;

export const PostDate = styled.span`
  font-size: 0.9rem;

  .outside &,
  .slideUp &,
  .aside & {
    display: none;
  }
`;

export const PostCoverImage = styled.div`
  border-radius: 75% 65%;
  height: 90px;
  overflow: hidden;
  width: 90px;
  flex-shrink: 0;

  img {
    height: 100%;
    width: 100%;
  }

  .outside &,
  .slideUp &,
  .aside & {
    height: 30px;
    width: 30px;
  }
`;
