import Theme from "./src/styles/Theme.js";

export const wrapRootElement = ({ element }) => {
  return <Theme>{element}</Theme>;
};
