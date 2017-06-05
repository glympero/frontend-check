/*global about manager host welcome slider more*/
/*eslint no-restricted-globals: ["error", "event"]*/
// @flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { REGISTER_URL } from '../../Constants/constants'
import $ from 'jquery'

export default class TitleHeader extends Component {


    animateAndScrollToAbout() {
        $('html, body').animate({
            scrollTop: $(about).offset().top
        }, 1000);
    }

    animateAndScrollToManager() {
        $('html, body').animate({
            scrollTop: $(manager).offset().top
        }, 1000);
    }

    animateAndScrollToHost() {
        $('html, body').animate({
            scrollTop: $(host).offset().top
        }, 1000);
    }

    animateAndScrollToWelcome() {
        $('html, body').animate({
            scrollTop: $(welcome).offset().top
        }, 1000);
    }

    animateAndScrollToSlider() {
        $('html, body').animate({
            scrollTop: $(slider).offset().top
        }, 1000);
    }

    animateAndScrollToMore() {
        $('html, body').animate({
            scrollTop: $(more).offset().top
        }, 1000);
    }

  getDestinationPage(){
    if(this.props.pageDest === "home"){
      return(
        <ul className="list-inline intro-social-buttons">
            <li>
                <a id="#about" onClick={this.animateAndScrollToAbout} className="btn btn-default btn-lg"><span className="network-name">SimplyBook</span></a>
            </li>
            <li>
                <a id="#manager" onClick={this.animateAndScrollToManager} className="btn btn-default btn-lg"><span className="network-name">Local Rentals</span></a>
            </li>
            <li>
                <a id="#host" onClick={this.animateAndScrollToHost} className="btn btn-default btn-lg"><span className="network-name">Low cost</span></a>
            </li>
        </ul>
      );
    }else {
      return(
        <ul className="list-inline intro-social-buttons">
            <li>
                <a id="#welcome" onClick={this.animateAndScrollToWelcome} className="btn btn-default btn-lg"><span className="network-name">Welcome</span></a>
            </li>
            <li>
                <a id="#slider" onClick={this.animateAndScrollToSlider} className="btn btn-default btn-lg"><span className="network-name">How it works</span></a>
            </li>
            <li>
                <a id="#more" onClick={this.animateAndScrollToMore} className="btn btn-default btn-lg"><span className="network-name">Find out more</span></a>
            </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="intro-header">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 intro-message">
                    <div className="action-button">
                      <Link to={REGISTER_URL} target="_blank">
                        <button>Need to increase your internet presence?
                          <br/><br/>
                          Register your car rental now
                        </button>
                      </Link>
                    </div>
                    <div className="intro-message">
                      <h1>SimplyBook</h1>
                      <h3>Supporting small and medium local car rental companies</h3>
                      <hr className="intro-divider" />
                      {this.getDestinationPage()}
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
