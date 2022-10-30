require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Sans Thai Looped\:400,400i,700,700i`],
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
                tag: "*",
                blocks: "*",
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
                articles: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "tag",
            queryParams: {
              populate: {
                articles: {
                  populate: "*",
                },
              },
            },
          },
        ],
        // singleTypes: [
        //   {
        //     singularName: "about",
        //     queryParams: {
        //       populate: {
        //         blocks: {
        //           populate: "*",
        //         },
        //       },
        //     },
        //   },
        //   {
        //     singularName: "global",
        //     queryParams: {
        //       populate: {
        //         favicon: "*",
        //         defaultSeo: {
        //           populate: "*",
        //         },
        //       },
        //     },
        //   },
        // ],
      },
    },
  ],
};
