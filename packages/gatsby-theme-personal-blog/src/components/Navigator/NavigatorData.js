import { useStaticQuery, graphql } from 'gatsby';

const navigatorData = () => {
  const data = useStaticQuery(graphql`
    query NavigatorQuery {
      posts: allMarkdownRemark(
        filter: {
          fields: {
            source: { in: ["personal-blog-posts", "personal-blog-demo-posts"] }
            slug: { ne: null }
          }
        }
        sort: { fields: [fields___date], order: DESC }
      ) {
        edges {
          node {
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
  `);

  const {
    posts: { edges },
  } = data;

  const posts = edges.map(edge => {
    const {
      frontmatter: {
        title,
        subTitle,
        category,
        cover: {
          childImageSharp: { fixed: imgData },
        },
      },
      fields: { slug, date },
    } = edge.node;

    return {
      title,
      subTitle,
      imgData,
      category,
      slug,
      date,
    };
  });

  return { posts };
};

export default navigatorData;
