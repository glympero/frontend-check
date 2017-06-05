// @flow
import React, { Component } from 'react'
import SimpleSlider from '../Other/simple-slider'

export default class AboutSlider extends Component {
  
  render() {
    return (
      <div id="slider" className="content-section-b">
          <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">See how it works</h2>
                </div>
                  <div className="col-lg-12 col-sm-12">
                      <SimpleSlider />
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
