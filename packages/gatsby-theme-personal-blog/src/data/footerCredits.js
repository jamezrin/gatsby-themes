import { useStaticQuery, graphql } from 'gatsby';

const footerCredits = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/fragments/footer-credits/" } }
      ) {
        edges {
          node {
            code {
              body
            }
            fields {
              source
            }
          }
        }
      }
    }
  `);

  const {
    allMdx: { edges },
  } = data;

  const notes = edges.map(edge => edge.node);

  if (notes.length === 1) {
    return notes[0].code.body;
  } else {
    return notes.find(note => {
      return note.fields.source === 'personal-blog-fragments';
    }).code.body;
  }
};

export default footerCredits;
