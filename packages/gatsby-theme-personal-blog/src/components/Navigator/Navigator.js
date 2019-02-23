import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import List from './List';

const NavigatorTemplate = props => {
  const {
    data: {
      posts: { edges: posts },
    },
  } = props;

  return (
    <nav>
      <List posts={posts} />
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
                  children {
                    ... on ImageSharp {
                      resolutions(width: 90, height: 90) {
                        ...GatsbyImageSharpResolutions_withWebp_noBase64
                      }
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
