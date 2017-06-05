// @flow

import React, { Component } from 'react';

export default class SectionThree extends Component {
  constructor() {
    super();
    const image = require('../../static/img/phones.png')
    this.state = { image }
  }


  render() {
    return (
      <div id="host" className="content-section-a">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">
                      Straight forward reliable insurance for full coverage at low cost
                    </h2>
                    <p className="lead">
                      For your safety and peace of mind we provide full insurance in cooperation with strong, reliable insurance providers at low cost. Unlike most providers who only cover car theft or serious damage, our insurance deals also include damages to the roof, windows, tyres and undercarriage covering you for both small and more serious accidents.</p> <p className="lead">It is a better choice for you, and it is a better choice for car rentals as you are both covered. This makes everyone safer and happier.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <img className="img-responsive about-image" src={ this.state.image } alt="" />
                </div>
            </div>
        </div>
      </div>
    )
  }
}
