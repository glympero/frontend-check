// @flow
import React, {  Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect'
import makeSelectHomePage from './selectors'
import MainSearch from '../../components/MainSearch'

export default class HomePage extends Component {

  render() {

    return (
        <div>
          <MainSearch />
        </div>
    )
  }
}
