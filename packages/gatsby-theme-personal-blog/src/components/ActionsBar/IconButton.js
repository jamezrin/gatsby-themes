import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ActionButton = styled(`button`)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s ease;
  height: 60px;
  width: 60px;
  margin: ${props => props.theme.spaces[`2xs`]} 0;

  :hover {
    svg {
      transform: scale(1.1);
      color: #333;
    }
  }

  svg {
    transition: inherit;
    color: #999;
    width: 30px;
    height: 30px;
  }
`;

const ActionLink = ActionButton.withComponent(Link);

export default ({ children, to, onClick }) => {
  return to ? (
    <ActionLink to={to} onClick={onClick}>
      {children}
    </ActionLink>
  ) : (
    <ActionButton onClick={onClick}>{children}</ActionButton>
  );
};
