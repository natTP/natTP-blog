require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    siteUrl: `https://blog.nattp.page/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allStrapiArticle {
            nodes {
              updatedAt
              slug
            }
          }
        }
      `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allStrapiArticle: { nodes: allPosts },
        }) => {
          const pathToDateMap = {};

          console.log("--------------", allPosts);

          allPosts.map((post) => {
            const slug = "/article/" + post.slug + "/";
            pathToDateMap[slug] = { date: post.updatedAt };
          });

          console.log("--------------", pathToDateMap);

          const pages = allPages.map((page) => {
            return { ...page, ...pathToDateMap[page.path] };
          });

          console.log("--------------", pages);

          return pages;
        },
        serialize: ({ path, date }) => {
          console.log("--------------", path, date);
          return {
            url: path,
            changefreq: "daily",
            priority: 0.7,
            lastmod: date,
          };
        },
      },
    },
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
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
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
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `blog.nattp.page`,
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
                references: "*",
                seo: {
                  populate: "*",
                },
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
                seo: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "tag",
            queryParams: {
              populate: {
                articles: "*",
                seo: {
                  populate: "*",
                },
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
                seo: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "global",
            queryParams: {
              populate: {
                favicon: "*",
                seo: {
                  populate: "*",
                },
              },
            },
          },
          {
            singularName: "featured",
            queryParams: {
              populate: {
                articles: "*",
              },
            },
          },
        ],
      },
    },
  ],
};
