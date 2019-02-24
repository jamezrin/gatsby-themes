import styled from '@emotion/styled';

export const ArtTitle = styled.h1`
  color: ${props => props.theme.colors.header};
  font-size: ${props => props.theme.fontSizes[`5xl`]};
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-weight: 600;
  margin: 0 ${props => props.theme.spaces[`4xl`]};
`;

export const ArtSubtitle = styled.h1`
  color: ${props => props.theme.colors.header};
  font-size: ${props => props.theme.fontSizes[`3xl`]};
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 300;
  margin: ${props => props.theme.spaces.xl}
    ${props => props.theme.spaces[`4xl`]} 0;
`;

export const Content = styled.div`
  margin: ${props => props.theme.spaces.xl}
    ${props => props.theme.spaces[`4xl`]};

  p {
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: 1.6;
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

  .gatsby-resp-image-link {
    border-radius: 6px;
    overflow: hidden;
    margin: ${props => props.theme.spaces[`2xl`]} -${props => props.theme.spaces[`4xl`]};
  }
`;

const Article = styled.article`
  max-width: 55rem;
  margin: 0 auto;
  padding: ${props => props.theme.spaces[`3xl`]}
    ${props => props.theme.spaces[`2xl`]};
`;

export default Article;
