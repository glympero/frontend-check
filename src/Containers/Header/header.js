/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/
// @flow
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ScrollEvent from 'react-onscroll'
import {Label} from "react-bootstrap"
import $ from 'jquery'

export default class Header extends Component {

    constructor() {
        super();
        const logo = require('../../static/img/logo-sb.png');
        this.state = {logo};
        this.handleScrollCallback = this.handleScrollCallback.bind(this);
    }

    handleScrollCallback() {
        if (document.body.scrollTop < 300) {
            $("#return-to-top").fadeOut("slow");
        } else {
            $("#return-to-top").fadeIn("slow");
        }
    }

    showLoginModal = () => {
        this.props.showLoginModal(true);
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ScrollEvent handleScrollCallback={this.handleScrollCallback}/>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>


                        <Link id="header_id" className="navbar-brand headerItem logo" to="/"><img
                            src={ this.state.logo } alt="Rent a car with Simplybook" id="image-logo"/>
                            <span className="nav-logo">
                            <Label>Simplybook</Label>
                            </span>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link className={location.pathname === "/car-rentals" ? "selected" : ""}
                                      to="/car-rentals">
                                    <Label>Car rentals</Label>
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav  navbar-right">
                            <li>
                                <Link className={location.pathname === "/about" ? "selected" : ""} to="/about">
                                    <Label>About Us</Label>
                                </Link>
                            </li>
                            <li>
                                <Link className={location.pathname === "/help" ? "selected" : ""} to="/help">
                                    <Label>Help</Label>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }
}
