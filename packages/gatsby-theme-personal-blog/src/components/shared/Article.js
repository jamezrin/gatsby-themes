import React from 'react';
import styled from '@emotion/styled';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/tag';
import AuthorNote from '../../../content/pieces/AuthorNote.mdx';

export const ArtTitle = styled.h1`
  color: ${props => props.theme.colors.header};
  font-size: ${props => props.theme.fontSizes[`5xl`]};
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 600;
  margin: 0 ${props => props.theme.spaces[`4xl`]};
`;

export const ArtSubtitle = styled.h2`
  color: ${props => props.theme.colors.header};
  font-size: ${props => props.theme.fontSizes[`3xl`]};
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 300;
  margin: ${props => props.theme.spaces.xl}
    ${props => props.theme.spaces[`4xl`]} 0;
`;

export const Content = styled.div`
  p {
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.6;
    margin: ${props => props.theme.spaces.xl}
      ${props => props.theme.spaces[`4xl`]};
    margin-bottom: ${props => props.theme.spaces.l};
  }

  pre {
    background: ${props => props.theme.colors.prismjsBg};
    border-radius: 6px;
    margin: ${props => props.theme.spaces[`2xl`]} -${props => props.theme.spaces[`4xl`]};
    padding: ${props => props.theme.spaces.l};
  }

  a {
    color: ${props => props.theme.colors.link};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.xl};
    margin: ${props => props.theme.spaces.xl} 0 ${props => props.theme.spaces.l};
  }
`;

const Article = styled.article`
  max-width: 55rem;
  margin: 0 auto;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.m};
  padding: ${props => props.theme.spaces[`3xl`]}
    ${props => props.theme.spaces[`2xl`]};

  > * {
    margin: ${props => props.theme.spaces.xl}
      ${props => props.theme.spaces[`4xl`]};
  }

  p {
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spaces.l};
  }

  ul {
    padding-left: ${props => props.theme.spaces.l};

    li {
      margin: ${props => props.theme.spaces.s} 0;
    }
  }

  pre {
    margin-top: ${props => props.theme.spaces[`2xl`]};
    margin-bottom: ${props => props.theme.spaces[`2xl`]};
  }

  .gatsby-resp-image-link {
    border-radius: 6px;
    overflow: hidden;
    margin: ${props => props.theme.spaces[`2xl`]} -${props => props.theme.spaces[`4xl`]};
  }
`;

const ArticleComp = ({ children, post = {} }) => {
  const { title, subTitle, body } = post;

  return (
    <MDXProvider
      components={{
        h1: ArtTitle,
        h2: ArtSubtitle,
      }}
    >
      {body ? (
        <Article>
          <ArtTitle>{title}</ArtTitle>
          {subTitle && <ArtSubtitle>{subTitle}</ArtSubtitle>}
          <MDXRenderer>{body}</MDXRenderer>
          <AuthorNote />
        </Article>
      ) : (
        <Article>{children}</Article>
      )}
    </MDXProvider>
  );
};

export default ArticleComp;
