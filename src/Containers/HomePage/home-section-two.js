// @flow

import React, { Component } from 'react'

export default class SectionTwo extends Component {
  constructor() {
    super();

    const image = require('../../static/img/imac.png')
    this.state = { image }
  }

  render() {
    return (
      <div id="manager" className="content-section-b">

        <div className="container">

            <div className="row">
                <div className="col-lg-8 col-lg-push-5 col-sm-push-6 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix" />
                    <h2 className="section-heading">
                      Simplybook for small and medium local car rentals
                    </h2>
                    <ul className="list-unstyled">
                        <li>Providing small and medium companies with the internet presence they deserve throughout the year without advertising costs.</li>
                        <li>Supporting local communities.</li>
                        <li>Easy to manage, simple and fast availability entry and update, anytime, anywhere.</li>
                        <li>Full technical support from our team.</li>
                        <li>Low cost insurance deals allowing small and medium size companies to have competitive prices and offer better deals.</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-lg-pull-8 col-sm-pull-6  col-sm-6">
                    <img className="img-responsive about-image" src={ this.state.image } alt="home view" />
                </div>
            </div>
        </div>
    </div>
    )
  }
}
