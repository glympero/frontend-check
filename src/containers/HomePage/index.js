// @flow
import React, {  Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
//import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect'
import makeSelectHomePage from './selectors'
import MainSearch from '../../components/MainSearch'
import { loadingTrue, saveDate, saveLocation, resetState } from './actions'

class HomePage extends Component {

  render() {

    return (
        <div>
          <MainSearch dataUI={this.props.HomePage} resetState={this.props.resetState} loading={false} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation}/>
        </div>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(initialState) {
  return initialState;

}

function mapDispatchToProps(dispatch) {
  return {
    loadingTrue: (type)=>{
      dispatch(loadingTrue(type))
    },
    saveDate:(type)=>{
      dispatch(saveDate(type))
    },
    saveLocation:(type)=>{
      dispatch(saveLocation(type))
    },
    resetState:(type)=>{
      dispatch(resetState(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
