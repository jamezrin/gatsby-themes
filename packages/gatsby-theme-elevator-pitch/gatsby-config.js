require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby 'Elevator Pitch' theme`,
    url: `http://`,
    image: 'preview.jpg',
    language: 'en',
    description: 'asdfas'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `elevator-pitch-screens`,
        path: `content/elevator-pitch/screens`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `elevator-pitch-images`,
        path: `content/elevator-pitch/images`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-emotion`
  ]
};
