const path = require("path");
const { stringToSlug } = require("./src/utils/slugUtils")

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
  const result = await graphql(
    `
      {
        allStrapiTag {
          nodes {
            title
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

  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${stringToSlug(tag.title)}`,
        component: tagTemplate,
      });
    });
  }
};
