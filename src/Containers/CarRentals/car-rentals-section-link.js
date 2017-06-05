// @flow
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { REGISTER_URL } from '../../Constants/constants';
export default class AboutSectionLink extends Component {

  render() {
    return (
      <div id="textarea-three" className="content-section-b">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-sm-12">
                      <hr className="section-heading-spacer" />
                      <div className="clearfix"></div>
                      <p className="par-unstyled text-center"><Link to={ REGISTER_URL } target="_blank" className="join">Join Simplybook </Link>now and help us bring to small and medium  rentals the internet presence and clients you deserve.</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
