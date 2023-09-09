const path = require("path");
const { stringToSlug } = require("./src/utils/slugUtils");
const { paginate } = require("gatsby-awesome-pagination");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src")],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Use createPages for tags because we want to keep thai language in slug
  const tagTemplate = path.resolve("./src/pages/tag/tagTemplate.js");
  const columnTemplate = path.resolve("./src/pages/column/columnTemplate.js");
  const result = await graphql(
    `
      {
        allStrapiTag {
          nodes {
            id
            title
          }
        }
        allStrapiColumn {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors);
    return;
  }

  const tags = result.data.allStrapiTag.nodes;
  const columns = result.data.allStrapiColumn.nodes;

  if (tags.length > 0) {
    tags.forEach(async (tag) => {
      const articles = await graphql(
        `
          query ($id: String) {
            allStrapiArticle(
              filter: { tags: { elemMatch: { id: { eq: $id } } } }
              sort: { fields: publishedAt, order: DESC }
            ) {
              nodes {
                id
                title
                slug
              }
            }
          }
        `,
        { id: tag.id }
      );

      if (result.errors) {
        reporter.panicOnBuild(
          `Error while running GraphQL query.`,
          result.errors
        );
        return;
      }

      paginate({
        createPage,
        items: articles.data.allStrapiArticle.nodes,
        itemsPerPage: 9,
        pathPrefix: `/tag/${stringToSlug(tag.title)}`,
        component: tagTemplate,
        context: {
          id: tag.id,
          pathPrefix: `/tag/${stringToSlug(tag.title)}`,
        },
      });
    });
  }

  if (columns.length > 0) {
    columns.forEach(async (column) => {
      const articles = await graphql(
        `
          query ($id: String) {
            allStrapiArticle(
              filter: { column: { id: { eq: $id } } }
              sort: { fields: publishedAt, order: DESC }
            ) {
              nodes {
                id
                title
                slug
              }
            }
          }
        `,
        { id: column.id }
      );

      if (result.errors) {
        reporter.panicOnBuild(
          `Error while running GraphQL query.`,
          result.errors
        );
        return;
      }

      paginate({
        createPage,
        items: articles.data.allStrapiArticle.nodes,
        itemsPerPage: 9,
        pathPrefix: `/column/${column.slug}`,
        component: columnTemplate,
        context: {
          id: column.id,
          pathPrefix: `/column/${column.slug}`,
        },
      });
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type STRAPI__COMPONENT_SHARED_RICH_TEXT implements Node {
      childStrapiComponentSharedRichTextBodyTextnode : TempMarkdownRemark 
    }
    type TempMarkdownRemark {
      childMarkdownRemark: MarkdownRemark
    }

    type STRAPI__COMPONENT_SHARED_MEDIA implements Node {
      caption: String
    }

    type STRAPI__COMPONENT_SHARED_QUOTE implements Node {
      body: String
      title: String
    }

    type STRAPI__COMPONENT_SHARED_EMBEDDED_VIDEO implements Node {
      link: String
    }

    union STRAPI__COMPONENT_SHARED_EMBEDDED_VIDEOSTRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTUnion = STRAPI__COMPONENT_SHARED_RICH_TEXT | STRAPI__COMPONENT_SHARED_MEDIA | STRAPI__COMPONENT_SHARED_QUOTE | STRAPI__COMPONENT_SHARED_EMBEDDED_VIDEO
  `;
  createTypes(typeDefs);
};
