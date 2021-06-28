module.exports = {
  siteMetadata: {
    title: 'TopView Exercise',
    description: 'Coding exercise for TopView',
    author: 'K Huehn',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans'],
        },
      },
    },
    'gatsby-plugin-emotion',
  ],
};
