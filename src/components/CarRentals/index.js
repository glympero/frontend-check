// @flow

import React, { Component } from 'react'
import TitleHeader from '../TitleHeader'
import CarRentalsSectionOne from './car-rentals-section-one';
import CarRentalsSlider from './car-rentals-slider';
import CarRentalsSectionTwo from './car-rentals-section-two';
import CarRentalsSectionThree from './car-rentals-section-three';
import CarRentalsSectionFour from './car-rentals-section-four';
import CarRentalsSectionLink from './car-rentals-section-link';
import Social from '../Other/social';
import Footer from '../Footer';
import '../../css/car-rentals.css'


export default class CarRentals extends Component {

	render() {
		return (
			<div className="about-page">
				<TitleHeader pageDest="about"/>
				<CarRentalsSectionOne />
				<CarRentalsSlider />
				<CarRentalsSectionTwo />
				<CarRentalsSectionThree />
				<CarRentalsSectionFour />
				<CarRentalsSectionLink />
				<Social />
				<Footer />
			</div>
		)
	}
}
