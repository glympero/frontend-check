import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/HomePage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('main');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
});
