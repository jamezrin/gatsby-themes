require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby.js 'Personal blog' theme`,
    url: `https://github.com/greglobinski/gatsby-themes/tree/master/packages/gatsby-theme-personal-blog`,
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
  ],
};
