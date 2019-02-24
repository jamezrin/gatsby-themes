import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { UIContext } from '../../context/UIState';
import PostList from './PostList';
import { Navigator } from './Styled';

const NavigatorTemplate = props => {
  const {
    data: {
      posts: { edges: posts },
    },
  } = props;

  const { navigatorState } = useContext(UIContext);

  return (
    <Navigator className={navigatorState}>
      <PostList posts={posts} />
    </Navigator>
  );
};

const NavigatorComp = props => (
  <StaticQuery
    query={graphql`
      query NavigatorQuery {
        posts: allMarkdownRemark(
          filter: {
            fields: {
              source: {
                in: ["personal-blog-posts", "personal-blog-demo-posts"]
              }
              slug: { ne: null }
            }
          }
          sort: { fields: [fields___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
                date
              }
              frontmatter {
                title
                subTitle
                category
                cover {
                  childImageSharp {
                    fixed(width: 90, height: 90) {
                      ...GatsbyImageSharpFixed_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <NavigatorTemplate data={data} {...props} />}
  />
);

export default NavigatorComp;
