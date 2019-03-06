import { useStaticQuery, graphql } from 'gatsby';

import { FiGithub, FiLinkedin, FiTwitter, FiLink } from 'react-icons/fi';

const icons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  www: FiLink,
};

const socialLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { socialLinks },
    },
  } = data;

  const links = socialLinks.map(link => {
    if (icons[link.name]) {
      link.icon = icons[link.name];
    }

    return link;
  });

  return links;
};

export default socialLinks;
