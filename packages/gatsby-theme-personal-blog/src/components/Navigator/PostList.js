import React from 'react';
import PropTypes from 'prop-types';

import PostListItem from './PostListItem';
import { PostList } from './Styled';

const PostListComp = ({ posts }) => {
  return (
    <PostList>
      {posts.map(post => {
        const {
          node: {
            fields: { date, slug },
            frontmatter: { title, subTitle, cover },
          },
        } = post;

        return (
          <PostListItem
            key={date}
            title={title}
            subTitle={subTitle}
            date={date}
            slug={slug}
            cover={cover}
          />
        );
      })}
    </PostList>
  );
};

PostListComp.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostListComp;
