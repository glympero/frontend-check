/*eslint no-useless-constructor: "error"*/
// @flow

import React from 'react'
import TitleHeader from '../TitleHeader'
import SectionOne from './home-section-one.js'
import SectionTwo from './home-section-two.js'
import SectionThree from './home-section-three.js'
import Social from '../Other/social';
import Footer from '../Footer';

const HomePage = () => {
	return (

		<div className="landing-page">
			<TitleHeader pageDest="home" />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<Social />
			<Footer />
		</div>
	)
}

export default HomePage;
