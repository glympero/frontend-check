import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import WebFont from 'webfontloader'
import './Css/app.css'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import Header from './Containers/Header/header'
import HomePage from './Containers/HomePage/home-page'
import CarRentals from './Containers/CarRentals/car-rentals'
import About from './Containers/About/about'
import Help from './Containers/Help/help'
import NotFound from './Containers/Other/not-found';


WebFont.load({
  google: {
    families: ['Droid Sans', 'Indie Flower', 'Josefin Sans', 'Vidaloka', 'Lato', 'Josefin Sans']
  }
});

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
    <main>
      <BrowserRouter>
        <div className='main' id="header">
          <Route component={ScrollToTop} />
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/car-rentals' component={CarRentals}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/help' component={Help}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </main>
)

export default App;
