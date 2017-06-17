/**
*
* MainSearch
*
*/

import React from 'react';
import FormSearch from '../FormSearch/'
import {Container } from 'semantic-ui-react'
import MainSlider from '../MainSlider/'
//import { browserHistory } from 'react-router'
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


function MainSearch(props) {

  return (
    <div>
      <div className='slider'>
        <div className= 'containerFormSearch'>
          <MainSlider />
          <div className='ui container containerForm'>
            <FormSearch title="Welcome!" />
          </div>
        </div>
      </div>
    </div>
  );
}

MainSearch.propTypes = {

};

export default MainSearch;
