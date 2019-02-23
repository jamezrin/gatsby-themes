import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PostList from './PostList';

const NavigatorTemplate = props => {
  const {
    data: {
      posts: { edges: posts },
    },
  } = props;

  console.log(props.data);

  return (
    <nav>
      <PostList posts={posts} />
    </nav>
  );
};

const Navigator = () => (
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
          sort: { fields: [fields___date], order: ASC }
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
    render={data => <NavigatorTemplate data={data} />}
  />
);

export default Navigator;
