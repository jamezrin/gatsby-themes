import React, { useContext } from 'react';

import { UIContext } from '../../context/UIState';
import PostList from './PostList';
import { Navigator as NavigatorRoot } from './styled';
import navigatorData from './NavigatorData';

const Navigator = props => {
  const { navigatorState } = useContext(UIContext);
  const { posts } = navigatorData();

  return (
    <NavigatorRoot className={navigatorState}>
      <PostList posts={posts} />
    </NavigatorRoot>
  );
};

export default Navigator;
