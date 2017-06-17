/**
*
* MainSlider
*
*/

import React from 'react';
import Slider from 'react-slick'
const img_1 = require('../../static/img/slider-main/athens.jpg');
const img_2 = require('../../static/img/slider-main/thess.jpg');
const img_3 = require('../../static/img/slider-main/santorini.jpg');
const img_4 = require('../../static/img/slider-main/cyclades.jpg');
const img_5 = require('../../static/img/slider-main/crete.jpg');
const img_6 = require('../../static/img/slider-main/zagorochoria.jpg');
export default class MainSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const settings = {
      className: 'slideImg',
      dots: true,
      infinite: true,
      arrows: false,
      lazyLoad: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      responsive:[{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }
    return (
      <Slider {...settings}>
        <div><img src={img_1} alt="" /></div>
        <div><img src={img_2} alt="" /></div>
        <div><img src={img_3} alt="" /></div>
        <div><img src={img_4} alt="" /></div>
        <div><img src={img_5} alt="" /></div>
        <div><img src={img_6} alt="" /></div>
      </Slider>
    );
  }
}

