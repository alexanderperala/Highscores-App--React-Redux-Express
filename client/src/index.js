import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fetchHighscores } from "./redux/reducer";


store.dispatch(fetchHighscores);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
