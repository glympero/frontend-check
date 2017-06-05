/*global header*/
/*eslint no-restricted-globals: ["error", "event"]*/
// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class Footer extends Component {

  animateAndScrollToTop(e) {
        $('html, body').animate({
            scrollTop: $(header).offset().top
        }, 1000);
	}

  render() {
    return (
      <footer>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <ul className="list-inline">
                          <li>
                              <Link to="/">Home</Link>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <Link to="/help">Help</Link>
                          </li>
                          <li className="footer-menu-divider">&sdot;</li>
                          <li>
                              <Link to="/about">About Us</Link>
                          </li>
                          <li><a onClick={this.animateAndScrollToTop} id="return-to-top"> <i className="fa fa-arrow-up" aria-hidden="true" /></a></li>
                      </ul>
                      <p className="copyright text-muted small">Copyright SimplyBook {new Date().getFullYear()}. All Rights Reserved</p>
                  </div>
              </div>

          </div>
      </footer>
    )
  }
}
