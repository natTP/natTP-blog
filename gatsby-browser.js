import React from "react";
import { Provider } from "@lyket/react";
import AppContainer from "components/common/AppContainer.js";
import "styles/global.css";
import "styles/codeTheme.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const wrapPageElement = ({ element }) => {
  return (
    <Provider apiKey={process.env.GATSBY_LYKET_TOKEN}>
      <AppContainer>{element}</AppContainer>
    </Provider>
  );
};
