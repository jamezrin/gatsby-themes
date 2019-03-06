import React from 'react';
import styled from '@emotion/styled';

import socialLinks from '../../data/socialLinks';

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const SocialLink = styled.li`
  margin: ${props => props.theme.spaces.xl} ${props => props.theme.spaces.xs} 0;
  opacity: 1;
  transition: 0.5s ease;

  .navigatorAside &,
  .navigatorSlidingUp & {
    opacity: 0;
  }

  a {
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    color: #999;

    svg {
      width: 60%;
      height: 60%;
    }
  }
`;

export default props => {
  const links = socialLinks();

  return (
    <SocialLinks>
      {links.map(link => {
        const Icon = link.icon;

        return (
          <SocialLink key={link.name}>
            <a href={link.url}>
              <Icon />
            </a>
          </SocialLink>
        );
      })}
    </SocialLinks>
  );
};
