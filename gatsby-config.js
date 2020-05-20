require("dotenv").config({
  path:`.env.development`,
})

module.exports = {
  siteMetadata: {
    title: `Youtube Project`,
    description:  `Amazing youtube project`,
    author: `@rithesh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,  // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:"l7eip21hiap2",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken:"-jcoI4Ieqh57oqmMJm4JPJi5Az1PiSxygHbrFw0Xd-Q",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
