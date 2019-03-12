import React from 'react';
import styled from '@emotion/styled';
import { FiExternalLink, FiCamera } from 'react-icons/fi';

const PhotoCredit = styled.figure`
  position: relative;

  figcaption {
    position: absolute;
    bottom: 0;
    font-size: 0.9rem;
    max-width: 80%;
    margin-left: -${props => props.theme.spaces[`4xl`]};

    a {
      align-items: center;
      background: rgba(0, 0, 0, 0.3);
      color: white;
      display: flex;
      text-decoration: none;
      border-radius: 4px 4px 0 6px;
      padding: ${props => props.theme.spaces.s} ${props => props.theme.spaces.m};
      transition: 0.5s ease;

      :hover {
        background: rgba(0, 0, 0, 0.6);
        transition: 0.3s ease;

        svg {
          &:last-of-type {
            opacity: 1;
            transform: translate(20%, -5%) scale(1.2);
          }
        }
      }

      svg {
        opacity: 0.5;
        transition: inherit;

        &:first-of-type {
          margin-right: ${props => props.theme.spaces.xs};
        }
        &:last-of-type {
          margin-left: ${props => props.theme.spaces[`2xs`]};
        }
      }

      i {
        font-style: normal;
        margin-right: ${props => props.theme.spaces[`2xs`]};
      }
    }
  }
`;

export default ({ children }) => {
  return (
    <PhotoCredit>
      {children[0].props.children}
      <figcaption>
        <a href={children[1].props.children.props.props.href}>
          <FiCamera aria-hidden /> <i>Photo credit:</i>{' '}
          <b>{children[1].props.children.props.children}</b>
          <FiExternalLink aria-hidden />
        </a>
      </figcaption>
    </PhotoCredit>
  );
};
//
