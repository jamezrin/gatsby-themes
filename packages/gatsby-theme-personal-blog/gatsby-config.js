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
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
};
