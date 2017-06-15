// @flow
import React, { Component } from 'react';

export default class AboutSectionTwo extends Component {
  state: {
    image: string
  };

  constructor() {
    super();
    const image = require('../../static/img/bookings.png')
    this.state = {
      image
    };
  }
  render() {
    return (
      <div id="more" className="content-section-a">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-sm-6">
                      <hr className="section-heading-spacer" />
                      <div className="clearfix" />
                      <h2 className="section-heading">
                        Do you want to increase your online bookings?
                      </h2>
                      <p className="par-unstyled-about text-center">
                        We have good news. It took us a lot of time, research and programming using innovative technologies, to create Simplybook, a car rental system that will help small and medium car rentals have a strong presence in the market, without IT and advertising costs.
                      </p>
                  </div>
                  <div className="col-lg-4 col-lg-offset-2 col-sm-6">
                      <img className="img-responsive about-image" src={ this.state.image } alt="section two view" />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
