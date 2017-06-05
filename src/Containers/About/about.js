// @flow

import React, { Component } from 'react';
import Social from '../Other/social';
import Footer from '../Footer/footer';
import YouTube from 'react-youtube';

export default class About extends Component {

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 2
      }
    };

    return (
      <div className="about-page">
        <div id="welcome" className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">About Us</h2>
                <p className="par-unstyled-about text-center">
                  In Simplybook, we are developers, car rental clients and most importantly people who want to support local medium and small companies. Starting from the Greek market, our aim is to provide local car rentals the internet exposure they deserve while providing reliable and low cost service to car renters clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="textarea-three" className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="col-lg-12 col-sm-12 text-center ">
                  <YouTube
                    videoId="ZNXMc4yELVc"
                    opts={opts}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="more" className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">Why we created Simplybook</h2>
                <p className="par-unstyled-about text-center">
                  Simplybook was born out of our own frustration as car rental customers in our efforts to rent a car online in Greece. We found out that this can be difficult and confusing.

                </p>
                <p className="par-unstyled-about text-center">
                  While trying to support small and medium local rental companies we found out that most of them did not have a direct booking system in their websites (if they actually had one).  We had to email the company with our request and wait for some very busy employees in the hot high season days of August to answer back.
                </p>
                <p className="par-unstyled-about text-center">
                  If we were not determined to get a car from a local small rental we would have gone for the cheaper, faster and frankly, the more tempting way.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <hr className="section-heading-spacer" />
                <div className="clearfix" />
                <h2 className="section-heading">The car rental insurance excess problem</h2>
                <p className="par-unstyled-about text-center">
                  And then there was the insurance nightmare and the traps hidden at the fine print. You may think that you know what you are insured for, but this is rarely the case.
                </p>
                <p className="par-unstyled text-center">
                  We found this out the hard way. You don’t have to.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="textarea-two" className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                {/* <hr className="section-heading-spacer" />
                 <div className="clearfix"></div> */}
                <p className="par-unstyled-about text-center">
                  Car rental insurances were designed to cover the car rental companies for car theft or damage. They were not meant to cover you for smaller and much more common accidents which are more likely to happen, like a broken window or headlight, or even a flat tire. Although you are paying for car rental insurance  you still have to pay for these minor damages. This is called “excess”.
                </p>
                {/* <p className="par-unstyled text-center">
                 Simplybook brings to you low cost, reliable insurance policies covering car hire excess, so you can feel safer and relaxed when you drive your holiday car
                 </p> */}
              </div>
            </div>
          </div>
        </div>
        <div id="textarea-three" className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <p className="par-unstyled text-center">
                  Simplybook brings to you low cost, reliable insurance policies covering car hire excess, so you can feel safer and relaxed when you drive your holiday car
                </p>
                {/* <p className="par-unstyled-about text-center">
                 In Simplybook, we are developers, car rental clients and most importantly people who want to support local medium and small companies. Starting from the Greek market, our aim is to provide local car rentals the internet exposure they deserve while providing reliable and low cost service to your clients.
                 </p> */}
              </div>
            </div>
          </div>
        </div>

        <Social />
        <Footer />
      </div>
    )
  }
}
