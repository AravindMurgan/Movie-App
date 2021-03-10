import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Series = () => {
	let URL =
		'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
	const [series, setSeries] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const res = await axios(URL);
			setSeries(res.data.entries);
			setLoading(false);
		};

		fetchData();
	}, []);

	//sorting//
	series.sort((a, b) => {
		let nameA = a.title.toLowerCase().replace(/\s+/g, ''),
			nameB = b.title.toLowerCase().replace(/\s+/g, '');
		if (nameA < nameB)
			//sort string ascending
			return -1;
		if (nameA > nameB) return 1;
		return 0; //default return value (no sorting)
	});

	series.splice(21, series.length - 1);
	return (
		<div>
			{!loading ? (
				<div>
					<div className='movie-container'>
						<nav className='navbar'>
							<p>Popular Series</p>
							<Link to='/' className='btn btn-dark '>
								Home
							</Link>
						</nav>

						{series
							.filter((a) => a.programType === 'series')
							.map((serie, index) => (
								<div key={index} className='movie'>
									<img src={serie.images['Poster Art'].url} alt={serie.title} />

									<div className='movie-info'>
										<h3> {serie.programType} </h3>
									</div>
								</div>
							))}
					</div>

					<Footer />
				</div>
			) : (
				<div> Loading ... </div>
			)}
		</div>
	);
};

export default Series;
