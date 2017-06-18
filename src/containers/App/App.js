// @flow
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/app.css'
import 'semantic-ui-css/semantic.min.css'
import '../../css/car-search.css'
import WebFont from 'webfontloader'
// import {
//   BrowserRouter,
//   Route,
//   Switch
// } from 'react-router-dom'
import Header from '../../components/Header'
// import '../../css/main.sass'
// import SearchPage from '../../components/SearchPage'
// import CarRentals from '../../components/CarRentals'
// import About from '../../components/About'
// import Help from '../../components/Help'
// import NotFound from '../../components/Other/not-found'
//
// //Search
// import SearchHome from '../HomePage'
//
//
WebFont.load({
  google: {
    families: ['Droid Sans', 'Indie Flower', 'Josefin Sans', 'Vidaloka', 'Lato', 'Josefin Sans', 'Montserrat', 'Roboto' ]
  }
});
//
//
// const App = () => (
//     <main>
//       {/*<BrowserRouter>*/}
//         {/*<div className='main' id="header">*/}
//           {/*<Route component={ScrollToTop} />*/}
//           {/*<Header />*/}
//           {/*<Switch>*/}
//             {/*<Route exact path='/' component={HomePage} />*/}
//             {/*<Route exact path='/car-rentals' component={CarRentals}/>*/}
//             {/*<Route exact path='/about' component={About}/>*/}
//             {/*<Route exact path='/help' component={Help}/>*/}
//             {/*<Route exact path='/search' component={SearchHome}/>*/}
//             {/*<Route component={NotFound} />*/}
//           {/*</Switch>*/}
//         {/*</div>*/}
//       {/*</BrowserRouter>*/}
//     </main>
// )
//
// const ScrollToTop = () => {
//   window.scrollTo(0, 0);
//   return null;
// };
//
// export default App;

// import React from "react";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
         <div>
           <Header />
         </div>
    );
  }
}