import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PostListItem from './PostListItem';

const PostListRoot = styled.ul`
  list-style: none;

  a {
    color: ${props => props.theme.colors.header};
    text-decoration: none;
  }
`;

const PostList = ({ posts }) => {
  return (
    <PostListRoot>
      {posts.map(post => {
        const { date } = post;

        return <PostListItem key={date} post={post} />;
      })}
    </PostListRoot>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
