import { useStaticQuery, graphql } from 'gatsby';

const footerCredits = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/fragments/footer-credits/" } }
      ) {
        edges {
          node {
            html
            fields {
              source
            }
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
  } = data;

  const notes = edges.map(edge => edge.node);

  if (notes.length === 1) {
    return notes[0].html;
  } else {
    return notes.find(note => {
      return note.fields.source === 'personal-blog-fragments';
    }).html;
  }
};

export default footerCredits;
