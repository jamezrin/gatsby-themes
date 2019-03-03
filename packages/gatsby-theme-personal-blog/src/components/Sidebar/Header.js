import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { BaseTitle } from '../shared/Typography';
import { UIContext } from '../../context/UIState';

const Header = styled.header`
  width: 100%;
`;

const Avatar = styled.div`
  width: ${props => props.theme.dimensions.avatar.owner.width};
  height: ${props => props.theme.dimensions.avatar.owner.width};
  border: 1px solid black;
  border-radius: 65% 75%;
  position: relative;
  margin-bottom: ${props => props.theme.spaces.m};
  top: 0;
  left: 0;
  transform: translate(
    calc(
      (${props => props.theme.dimensions.sidebar.width} / 2) -
        (${props => props.theme.dimensions.avatar.owner.width} / 2) -
        ${props => props.theme.dimensions.sidebar.padding}
    ),
    0
  );
  transition: 0.5s ease;

  .navigatorSlidingUp &,
  .navigatorAside & {
    border-radius: 75% 65%;
    transform: translate(
        calc(${props => props.theme.dimensions.avatar.owner.width} * -0.2),
        calc(${props => props.theme.dimensions.avatar.owner.width} * -0.1)
      )
      scale(0.6);
  }
`;

const Title = styled(BaseTitle)`
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes[`2xl`]};
  position: relative;
  white-space: nowrap;
  display: inline-block;
  left: 0;
  transition: 0.5s;
  transform: translateX(
    calc(
      (${props => props.theme.dimensions.sidebar.width} / 2) - 50% -
        (${props => props.theme.dimensions.sidebar.padding} * 2)
    )
  );
  line-height: 1;

  .navigatorSlidingUp &,
  .navigatorAside & {
    left: 0;
    transform: translateX(0);
  }
`;

const Subtitle = styled(Title)`
  font-size: ${props => props.theme.fontSizes.s};
  margin-top: 0.25em;
`;

const Hgroup = styled.hgroup`
  position: relative;
  transition: 0.5s ease;
  width: calc(
    100% - (${props => props.theme.dimensions.avatar.owner.width} * 0.8)
  );
  transform: translate(
    calc(${props => props.theme.dimensions.avatar.owner.width} * 0.4),
    0
  );

  .navigatorSlidingUp &,
  .navigatorAside & {
    transform: translate(
      calc(${props => props.theme.dimensions.avatar.owner.width} * 0.8),
      calc(
        (
            ${props => props.theme.dimensions.avatar.owner.width} +
              ${props => props.theme.spaces.m}
          ) * -1
      )
    );
  }
`;

const addPrefix = (prefix, str) =>
  prefix + str.charAt(0).toUpperCase() + str.slice(1);

export default props => {
  const { navigatorState, slideInNavigator } = useContext(UIContext);

  return (
    <Header className={addPrefix('navigator', navigatorState)}>
      <Link to="/" onClick={slideInNavigator}>
        <Avatar />
        <Hgroup>
          <Title>greg lobinski</Title>
          <Subtitle>personal blog</Subtitle>
        </Hgroup>
      </Link>
    </Header>
  );
};
