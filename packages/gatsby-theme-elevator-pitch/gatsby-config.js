require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby.js 'Elevator Pitch' theme`,
    url: `https://github.com/jlengstorf/gatsby-theme-simple-docs`,
    image: 'preview.jpg',
    language: 'en',
    description: 'coming soon...',
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
        name: `elevator-pitch-screens`,
        path: `content/elevator-pitch/screens`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `elevator-pitch-images`,
        path: `content/elevator-pitch/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-elevator-pitch'],
      },
    },
  ],
};
