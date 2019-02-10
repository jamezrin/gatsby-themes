import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/variables';
import '../styles/global';

import Screens from './Screens';
import Screen from './Screen';
import Nav from './Nav';
import Social from './Social';
import Seo from './Seo';

import ChevronUpIcon from 'react-feather/dist/icons/chevron-up';
import ChevronDownIcon from 'react-feather/dist/icons/chevron-down';

import socialLinks from '../social-networks-config';

const Viewer = props => {
  const navIcons = {
    next: ChevronDownIcon,
    prev: ChevronUpIcon
  };

  const {
    data: {
      site: {
        siteMetadata: { title, url, language, image, description }
      },
      screens: { edges },
      avatar
    }
  } = props;

  const screensData = edges.map(edge => {
    const {
      node: {
        fields: { prefix: id },
        html
      }
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
      query ViewerQuery {
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
              prefix: { ne: null }
            }
          }
          sort: { fields: [fields___prefix], order: ASC }
        ) {
          edges {
            node {
              fields {
                prefix
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
