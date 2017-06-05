// @flow
import React, { Component } from 'react';

export default class Social extends Component {

  render() {
      return (
        <div id="contact" className="banner">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <h2>Connect to SimplyBook:</h2>
                  </div>
                  <div className="col-lg-6">
                      <ul className="list-inline banner-social-buttons">
                          <li>
                              <a href="https://twitter.com/simplybookgr" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-fw" /><span className="network-name">Twitter</span></a>
                          </li>
                          <li>
                              <a href="https://www.facebook.com/Simplybookgr-868330109887509/" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-fw" /> <span className="network-name">Facebook</span></a>
                          </li>
                          <li>
                              <a href="https://www.instagram.com/simplybook.gr/" className="btn btn-default btn-lg" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-fw" /> <span className="network-name">Instagram</span></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      )
  }
}
