require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby.js 'Personal blog' theme`,
    url: `https://github.com/greglobinski/gatsby-themes/tree/master/packages/gatsby-theme-personal-blog`,
    image: 'preview.jpg',
    language: 'en',
    description: 'coming soon...',
    socialLinks: [
      { name: 'github', url: 'https://github.com/greglobinski' },
      { name: 'twitter', url: 'https://twitter.com/greglobinski' },
      { name: 'linkedin', url: 'https://www.linkedin.com/in/greglobinski/' },
      { name: 'www', url: 'https://www.greglobinski.com' },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-posts`,
        path: `content/personal-blog/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-demo-posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-demo-fragments`,
        path: `content/personal-blog/fragments`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-fragments`,
        path: `${__dirname}/content/fragments/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        labelFormat: '[local]',
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
  ],
};
