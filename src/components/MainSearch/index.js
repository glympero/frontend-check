/**
*
* MainSearch
*
*/

import React from 'react';
import FormSearch from '../FormSearch/'
import MainSlider from '../MainSlider/'

function MainSearch(props) {

  return (
    <div>
      <div className='slider'>
        <div className= 'containerFormSearch'>
          <MainSlider />
          <div className='ui container containerForm'>
            <FormSearch/>
          </div>
        </div>
      </div>
    </div>
  );
}

MainSearch.propTypes = {

};

export default MainSearch;
