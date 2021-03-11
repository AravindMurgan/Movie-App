import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<Fragment>
		<nav className='navbar pos '>
			<Link to={'/movies'} className='btn linkbtn'>
				Popular Movies
			</Link>

			<Link to={'/series'} className='btn linkbtn'>
				Popular Series
			</Link>
		</nav>
		<div className='image1'></div>
	</Fragment>
);

export default Home;
