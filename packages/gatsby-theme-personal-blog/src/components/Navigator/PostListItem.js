import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { UIContext } from '../../context/UIState';

const PostListItemRoot = styled.li`
  a {
    align-items: center;
    display: flex;
    padding: ${props => props.theme.spaces.l};

    .outside &,
    .slideUp &,
    .aside & {
      padding: ${props => props.theme.spaces.s} ${props => props.theme.spaces.l};
    }
  }
`;

const TextContainer = styled.div`
  margin-left: ${props => props.theme.spaces.xl};

  .outside &,
  .slideUp &,
  .aside & {
    margin-left: ${props => props.theme.spaces.m};
  }
`;

const PostTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes[`2xl`]};
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;

  .outside &,
  .slideUp &,
  .aside & {
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: 400;
  }
`;

const PostSubtitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 300;
  line-height: 1.2;
  margin-top: ${props => props.theme.spaces.s};

  .outside &,
  .slideUp &,
  .aside & {
    display: none;
  }
`;

const PostDate = styled.span`
  display: flex;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: ${props => props.theme.spaces.xs};

  .outside &,
  .slideUp &,
  .aside & {
    display: none;
  }
`;

const PostCoverImage = styled.div`
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

const PostListItem = ({ post }) => {
  const { title, subTitle, date, slug, imgData } = post;
  const { slideOutNavigator } = useContext(UIContext);

  return (
    <PostListItemRoot>
      <Link to={slug} onClick={slideOutNavigator}>
        <PostCoverImage>
          <Img fixed={imgData} />
        </PostCoverImage>
        <TextContainer>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          <PostSubtitle>{subTitle}</PostSubtitle>
        </TextContainer>
      </Link>
    </PostListItemRoot>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    imgData: PropTypes.object,
    category: PropTypes.string,
  }).isRequired,
};

export default PostListItem;
