import React from "react";
import { AppContainer } from "components/AppContainer.js";

export const wrapPageElement = ({ element }) => {
  return <AppContainer>{element}</AppContainer>;
};
