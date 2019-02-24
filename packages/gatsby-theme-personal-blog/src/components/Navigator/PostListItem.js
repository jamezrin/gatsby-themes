import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { UIContext } from '../../context/UIState';

import {
  PostListItem,
  PostTitle,
  PostSubtitle,
  PostDate,
  PostCoverImage,
  TextContainer,
} from './styled';

const PostListItemComp = ({ post }) => {
  const { title, subTitle, date, slug, imgData } = post;
  const { slideOutNavigator } = useContext(UIContext);

  return (
    <PostListItem>
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
    </PostListItem>
  );
};

PostListItemComp.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    slug: PropTypes.string,
    imgData: PropTypes.object,
    category: PropTypes.string,
  }).isRequired,
};

export default PostListItemComp;
