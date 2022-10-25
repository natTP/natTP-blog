import React from "react";
import AppContainer from "components/common/AppContainer.js";

export const wrapPageElement = ({ element }) => {
  return <AppContainer>{element}</AppContainer>;
};
