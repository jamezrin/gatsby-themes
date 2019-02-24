import styled from '@emotion/styled';

export const Navigator = styled.nav`
  background: ${props => props.theme.palette.white};
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
      ${props => props.theme.dimensions.infoBox.width},
      0,
      0
    );
    width: calc(100% - ${props => props.theme.dimensions.infoBox.width});

    &.slideOut {
      transition: 0.5s ease;
      transform: translate3d(
        calc((100% - ${props => props.theme.dimensions.infoBox.width}) * -1),
        0,
        0
      );
    }

    &.outside,
    &.slideUp,
    &.aside {
      width: ${props => props.theme.dimensions.infoBox.width};
    }

    &.outside {
      transform: translate3d(0, 100vh, 0);
    }

    &.slideUp {
      transition: 0.5s ease;
      transform: translate3d(0, 0, 0);
    }

    &.aside {
      transform: translate3d(0, 0, 0);
    }
  }
`;
