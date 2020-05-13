module.exports = {
  siteMetadata: {
    title: "Koji Kanao",
    author: "Koji Kanao",
    siteUrl: "http://kojikanao.netlify.app",
    description: "Koji Kanao personal website",
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: "https://kojikanao.netlify.com",
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://kojikanao.netlify.app",
        sitemap: "http://kojikanao.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Koji Kanao personal website`,
        short_name: `Koji Kanao personal website`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
        icons: [
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `icons/icon-152x152.png`,
            sizes: `152x152`,
            type: `image/png`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
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
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
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
