import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { UIContext } from '../../context/UIProvider';

import {
  PostListItem,
  PostTitle,
  PostSubtitle,
  PostDate,
  PostCoverImage,
  TextContainer,
} from './Styled';

const PostListItemComp = ({ title, subTitle, date, slug, cover }) => {
  const {
    childImageSharp: { fixed },
  } = cover;

  const { slideNavigator } = useContext(UIContext);

  return (
    <PostListItem>
      <Link to={slug} onClick={slideNavigator}>
        <PostCoverImage>
          <Img fixed={fixed} />
        </PostCoverImage>
        <TextContainer>
          <PostDate>{date}</PostDate>
          <PostTitle>{title}</PostTitle>
          <PostSubtitle>{subTitle}</PostSubtitle>
        </TextContainer>
      </Link>
    </PostListItem>
  );
};

PostListItemComp.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  slide: PropTypes.func,
};

export default PostListItemComp;
