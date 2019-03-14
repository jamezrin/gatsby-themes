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
    pageLinks: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personal-blog-pieces`,
        path: `${__dirname}/content/pieces/`,
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
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          'personal-blog-pieces': require.resolve(
            './src/templates/PieceTemplate'
          ),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              sizeByPixelDensity: true,
              backgroundColor: 'transparent',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
  ],
};
