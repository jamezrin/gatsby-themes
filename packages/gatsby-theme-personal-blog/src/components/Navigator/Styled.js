import styled from '@emotion/styled';

export const PostList = styled.ul`
  list-style: none;
`;

export const PostListItem = styled.li`
  margin: 20px;

  a {
    display: flex;
  }
`;

export const TextContainer = styled.div``;

export const PostTitle = styled.h2`
  font-size: 2rem;
`;

export const PostSubtitle = styled.h3`
  font-size: 1.3rem;
`;

export const PostDate = styled.span`
  font-size: 0.9rem;
`;

export const PostCoverImage = styled.div`
  border-radius: 75% 65%;
  height: 90px;
  overflow: hidden;
  width: 90px;
  flex-shrink: 0;

  img {
    height: 100%;
    width: 100%;
  }
`;
