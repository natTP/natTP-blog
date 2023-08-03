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
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${stringToSlug(tag.title)}`,
        component: tagTemplate,
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
