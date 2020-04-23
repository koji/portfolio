module.exports = {
  siteMetadata: {
    title: "Koji Kanao",
    author: "Koji Kanao",
    siteUrl: "https://kojikanao.netlify.com",
    description: "Koji Kanao information",
    github: "https://github.com/koji",
    instagram: "https://www.instagram.com/koji_kanao/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    // {
    //   resolve: `gatsby-transformer-sharp`,
    //   options: {
    //     // The option defaults to true
    //     checkSupportedExtensions: false,
    //   },
    // },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginakl: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/logo.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
