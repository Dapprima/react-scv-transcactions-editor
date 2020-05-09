import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
