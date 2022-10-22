import React from "react";
import { AppContainer } from "components/AppContainer.js";
import "./src/styles/global.css";

export const wrapPageElement = ({ element }) => {
  return <AppContainer>{element}</AppContainer>;
};
