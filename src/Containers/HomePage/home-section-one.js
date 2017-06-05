// @flow
import React, { Component } from 'react';

export default class SectionOne extends Component {
  constructor() {
    super();

    const image = require('../../static/img/ipad.png');
    this.state = { image };
  }
  render() {
    return (
      <div id="about" className="content-section-a">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-sm-6">
                      <hr className="section-heading-spacer" />
                      <div className="clearfix" />
                      <h2 className="section-heading">
                        Why rent a car with Simplybook?
                      </h2>
                      <ul className="list-unstyled">
                        <li>Simple, fast, reliable booking. Get exactly what you booked.</li>
                        <li>Support local small and medium businesses.</li>
                        <li>Strong, reliable insurance providing full coverage at low cost.</li>
                        <li>24/7 phone support.</li>
                        <li>No surprises. No hidden costs.</li>
                      </ul>
                  </div>
                  <div className="col-lg-4 col-lg-offset-2 col-sm-6">
                      <img className="img-responsive about-image" src={ this.state.image } alt="ipad view" />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
