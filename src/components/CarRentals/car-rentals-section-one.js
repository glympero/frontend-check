// @flow
import React, { Component } from 'react';

export default class AboutSectionOne extends Component {
  state: {
    image_one: string,
    image_two: string,
    image_three: string,
    image_four: string
  };

  constructor() {
    super();
    const image_one = require('../../static/img/1.png');
    const image_two = require('../../static/img/2.png');
    const image_three = require('../../static/img/3.png');
    const image_four = require('../../static/img/4.png');
    this.state = {
			image_one,
			image_two,
      image_three,
      image_four
    };
  }
  render() {
    return (
      <div id="welcome" className="content-section-a">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-sm-12">
                      <hr className="section-heading-spacer" />
                      <div className="clearfix" />
                      <h2 className="section-heading">Welcome to Simplybook</h2>
                      <p className="par-unstyled text-center">
                        We are developing a new, simple and easy to use system that will increase your sales throughout the year.
                      </p>
                  </div>
                  <div className="col-lg-12 col-sm-12 ">
                      {/* <img className="img-responsive about-image" src={ this.state.about_slider_image } alt="" /> */}
                   </div>
              </div>
          </div>
          <div className="autowide about-image-2">
            <div className="module">
              <p><img src={ this.state.image_one } alt="" /></p>
              <hr />
              <p>
                Join Simplybook for free
              </p>
            </div>
            <div className="module">
              <p><img src={ this.state.image_two } alt="" /></p>
              <hr />
              <p>
                Increase your internet presence with Simplybook
              </p>
            </div>
            <div className="module">
              <p><img src={ this.state.image_three } alt="" /></p>
              <hr />
              <p>
                Offer competitive prices with full insurance by reliable Simplybook insurance providers
              </p>
            </div>
            <div className="module">
              <p><img src={ this.state.image_four } alt="" /></p>
              <hr />
              <p>
                Increase your bookings throughout the year
              </p>
            </div>
          </div>
      </div>
    )
  }
}
