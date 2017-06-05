// @flow
import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SimpleSlider extends Component {

  renderSteps(stepsp: Array) {
    let steps = [];
    for (let j = 0; j < 5; j++) {
      let step = stepsp[j];
      steps.push((
				<div key={j}><img src={step.img} alt="slider view"/></div>
      ));
    }
    return steps;
  }

  render() {
  const slider_1 = require('../../static/img/slider-1.png');
  const slider_2 = require('../../static/img/slider-2.png');
  const slider_3 = require('../../static/img/slider-3.png');
  const  slider_4 = require('../../static/img/slider-4.png');
  const  slider_5 = require('../../static/img/slider-5.png');
  const  steps = [
    {
      img: slider_1
    },
    {
      img: slider_2
    },
    {
      img: slider_3
    },
    {
      img: slider_4
    },
    {
      img: slider_5
    }
  ];
    const settings = {
      dots: true,
      fade: true,
      speed: 800
    };

    return (
			<div className='container-slider'>
				<Slider {...settings}>
          {this.renderSteps(steps)}
				</Slider>
			</div>
    );
  }
}

