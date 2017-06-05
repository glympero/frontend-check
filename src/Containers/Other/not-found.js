// @flow
import React, { Component } from 'react';

export default class NotFound extends Component {

  render() {
    return (
      <div className='not-found '>
        <div className='overlay' />
        <div className='not-found-text'>
          <span>404.</span>
          <br />
          <span>Congratulations !</span>
          <br />
          <span>You broke the thing.</span>
        </div>
      </div>
    )
  }
}
