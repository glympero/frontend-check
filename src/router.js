// @flow
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { history } from "./store.js";
import App from './containers/App/App.js'
import HomePage from "./components/HomePage";
import CarRentals from './components/CarRentals'
import Help from './components/Help'
import About from './components/About'
import SearchHome from './containers/HomePage'
import NotFound from "./components/Other/not-found.js";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
// build the router
const router = (

          <main>
            <BrowserRouter history={history}>
                <div className='main' id="header">
                  <Route component={ScrollToTop} />
                  <Route component={App} />
                  <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/car-rentals' component={CarRentals}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/help' component={Help}/>
                    <Route exact path='/search' component={SearchHome}/>
                    <Route component={NotFound} />
                  </Switch>
                </div>
            </BrowserRouter>
          </main>

);

// export
export { router };
