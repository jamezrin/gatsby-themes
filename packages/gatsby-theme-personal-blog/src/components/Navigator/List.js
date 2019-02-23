import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Item = styled(`li`)`
  color: ${props => props.theme.colors.palette.black};
`;

const List = props => {
  const { posts } = props;

  return (
    <ul>
      {posts.map(post => {
        const {
          frontmatter: { title },
          fields: { date },
        } = post.node;
        return <Item key={date}>{title}</Item>;
      })}
    </ul>
  );
};

List.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default List;
