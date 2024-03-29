import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FooterCredits from '../../../content/pieces/FooterCredits.mdx';

const Footer = styled.footer`
  padding: ${props => props.theme.spaces.xl};
  color: ${props => props.theme.colors.lightText};

  &.inSidebar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    transition: 0.5s ease;

    .navigatorFeatured &,
    .navigatorSlidingIn & {
      transform: translateY(0);
    }
  }
`;

const Credits = styled(FooterCredits)`
  font-size: ${props => props.theme.fontSizes[`xs`]};

  ul {
    list-style: none;
    display: flex;

    justify-content: center;
  }

  li {
    text-align: center;
    padding: ${props => props.theme.spaces[`3xs`]}
      ${props => props.theme.spaces.xs};
  }

  .inSidebar & {
    ul {
      flex-direction: column;
      font-size: ${props => props.theme.fontSizes[`2xs`]};
    }
  }
`;

const FooterComp = ({ inSidebar = false }) => {
  return (
    <Footer className={inSidebar ? `inSidebar` : ``}>
      <Credits />
    </Footer>
  );
};

FooterComp.propTypes = {
  inSidebar: PropTypes.bool,
};

export default FooterComp;
