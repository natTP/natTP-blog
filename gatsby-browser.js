import React from "react";
import AppContainer from "components/common/AppContainer.js";
import "styles/global.css";
import "styles/codeTheme.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const wrapPageElement = ({ element }) => {
  return <AppContainer>{element}</AppContainer>;
};
