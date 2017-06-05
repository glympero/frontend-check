// @flow
import React, { Component } from 'react'

export default class AboutSectionThree extends Component {
  constructor() {
    super();

    const image = require('../../static/img/prices.png');
    this.state = { image };
  }
  render() {
    return (
      <div id="textarea-two" className="content-section-b">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-lg-push-5 col-sm-push-6 col-sm-6">
                      <hr className="section-heading-spacer" />
                      <div className="clearfix" />
                      <h2 className="section-heading">How can Simplybook help you have competitive prices?</h2>
                      <p className="par-unstyled-about text-center">
                      In <span className="strong-enabled">Simplybook</span> YOU can post your own availabilities with our assistance and technical support. You do not need to pay money for software, programming or marketing to make sure that you are high in the search results.</p>
                      <p className="par-unstyled-about text-center"><span className="strong-enabled">Joining Simplybook is free.</span>  The only cost for you is 10% commission for the bookings that Simplybook brings to you through its system. That’s it! Our no-hidden-costs policy applies to you and your customers.</p>
                      <p className="par-unstyled-about text-center"><span className="strong-enabled">Cut down on insurance costs.</span> Our partnership with strong, reliable insurance providers, will cover your clients with low cost, no excess, full insurance.</p>
                  </div>
                  <div className="col-lg-4 col-lg-pull-8 col-sm-pull-6  col-sm-6">
                      <img className="img-responsive about-image" src={ this.state.image} alt="about view" />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
