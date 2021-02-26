module.exports = {
  siteMetadata: {
    title: `Wideway enginnering solution`,
    description: `Engineering Your Journey: Delivering exponential value to engineering enterprises by collaborating with them across three key tenets`,
    author: `@T3KRAJ, @DJANGOVERFLOW`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
       postCssPlugins: [require("tailwindcss"),require("autoprefixer")],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wideway Engineering Solutions`,
        short_name: `WES`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    }
  ],
}
