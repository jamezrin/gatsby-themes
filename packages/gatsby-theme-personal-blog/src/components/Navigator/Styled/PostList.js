import styled from '@emotion/styled';

export const PostList = styled.ul`
  list-style: none;

  a {
    color: ${props => props.theme.colors.header};
    text-decoration: none;
  }
`;

export const PostListItem = styled.li`
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

export const TextContainer = styled.div`
  margin-left: ${props => props.theme.spaces.xl};

  .outside &,
  .slideUp &,
  .aside & {
    margin-left: ${props => props.theme.spaces.m};
  }
`;

export const PostTitle = styled.h2`
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

export const PostSubtitle = styled.h3`
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

export const PostDate = styled.span`
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

  .outside &,
  .slideUp &,
  .aside & {
    height: 30px;
    width: 30px;
  }
`;
