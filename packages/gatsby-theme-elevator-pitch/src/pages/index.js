import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/variables';
import '../styles/global';

import Screens from '../components/Screens';
import Screen from '../components/Screen';
import Nav from '../components/Nav';
import Social from '../components/Social';
import Seo from '../components/Seo';

import ChevronUpIcon from 'react-feather/dist/icons/chevron-up';
import ChevronDownIcon from 'react-feather/dist/icons/chevron-down';

import socialLinks from '../social-networks-config';

const Viewer = props => {
  const navIcons = {
    next: ChevronDownIcon,
    prev: ChevronUpIcon,
  };

  const {
    data: {
      site: {
        siteMetadata: { title, url, language, image, description },
      },
      screens: { edges },
      avatar,
    },
  } = props;

  const screensData = edges.map(edge => {
    const {
      node: {
        fields: { position: id },
        html,
      },
    } = edge;

    const screen = { id: parseInt(id, 10), html };

    if (screen.id === edges.length) {
      screen.avatar = avatar.childImageSharp.fixed;
    }

    return screen;
  });

  return (
    <React.Fragment>
      <Screens
        screensData={screensData}
        navComponent={Nav}
        screenComponent={Screen}
        socialComponent={Social}
        navIcons={navIcons}
        socialLinks={socialLinks}
      />
      <Seo
        url={url}
        language={language}
        title={title}
        description={description}
        image={image}
      />
    </React.Fragment>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
            url
            language
            image
            description
          }
        }
        screens: allMarkdownRemark(
          filter: {
            fields: {
              source: { eq: "elevator-pitch-screens" }
              position: { ne: null }
            }
          }
          sort: { fields: [fields___position], order: ASC }
        ) {
          edges {
            node {
              fields {
                position
                source
              }
              html
            }
          }
        }
        avatar: file(
          sourceInstanceName: { eq: "elevator-pitch-images" }
          name: { eq: "avatar" }
        ) {
          childImageSharp {
            fixed(width: 132, height: 132) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Viewer data={data} />}
  />
);
