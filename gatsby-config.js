require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`tag/tagTemplate.js`],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: ">",
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Sans Thai Looped\:400,400i,500,700,700i`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:8082",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "article",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                cover: "*",
                column: "*",
                tags: "*",
                blocks: {
                  populate: "*",
                },
                author: "*",
              },
            },
          },
          {
            singularName: "author",
          },
          {
            singularName: "column",
            queryParams: {
              populate: {
                articles: "*",
              },
            },
          },
          {
            singularName: "tag",
            queryParams: {
              populate: {
                articles: "*",
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: "about",
            queryParams: {
              populate: {
                author: "*",
                blocks: "*",
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                defaultSeo: "*",
              },
            },
          },
        ],
      },
    },
  ],
};
