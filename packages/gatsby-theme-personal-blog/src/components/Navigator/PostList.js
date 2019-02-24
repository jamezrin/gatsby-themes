import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem';
import { PostList as PostListRoot } from './styled';

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
