import React from "react";
import { AppContainer } from "components/AppContainer.js";
import { Theme } from "./src/styles/Theme.js";

export const wrapRootElement = Theme;
export const wrapPageElement = ({ element }) => {
  return <AppContainer>{element}</AppContainer>;
};
