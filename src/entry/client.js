// @flow strict

import React from "react";
import ReactDOM from "react-dom";

import App from "../App"

const element = document.getElementById('main')
if (!element) {
  throw new Error("Main element is missing!"); //eslint-disable-line
}

// Render
ReactDOM.render(<App />, element);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
