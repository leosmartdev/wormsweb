import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Tournament from './components/Tournament';
import Download from './components/Download';
import Information from './components/Information';
import Screenshot from './components/Screenshot';

const App = () => {
	return (
		<Fragment>

			<div className="container-fluid">
				<Header />
				<Slider />
				<Tournament />
				<Download />
				<Information />
				<Screenshot />
				<Footer />	
			</div>
		</Fragment>
	);
};

export default App;
