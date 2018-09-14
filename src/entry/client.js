// @flow strict

import React from "react";
import ReactDOM from "react-dom";

import App from "../App"

const element = document.getElementById('main')

// Render
if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  // rehydrateMarks().then(() => {
  //   ReactDOM.hydrate(app, element);
  // });
  ReactDOM.hydrate(<App />, element);
} else {
  ReactDOM.render(<App />, element);
}



// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
