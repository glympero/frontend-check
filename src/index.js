// @flow
import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
//import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
//import App from './containers/App/App.js'
import { Provider } from "react-redux";
import { store } from "./store.js";
import { router } from "./router.js";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app')
// );
//   registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
  registerServiceWorker();

