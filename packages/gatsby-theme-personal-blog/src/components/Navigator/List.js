import React from 'react';
import PropTypes from 'prop-types';

const List = props => {
  const { posts } = props;

  return (
    <ul>
      {posts.map(post => {
        const {
          frontmatter: { title },
          fields: { date },
        } = post.node;
        return <li key={date}>{title}</li>;
      })}
    </ul>
  );
};

List.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default List;
