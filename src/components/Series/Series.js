import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Series = () => {
	let URL =
		'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
	const [series, setSeries] = useState([]);
	const [loading, setLoading] = useState(false);

	//componentDidMount///
	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const res = await axios.get(URL);
			setSeries(res.data.entries);
			setLoading(false);
		};

		fetchData();
		// eslint-disable-next-line
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
							.filter(
								(a) => (a.programType === 'series' && a.releaseYear >= 2010)
							)
							.map((serie, index) => (
								<div key={index} className='movie'>
									<img src={serie.images['Poster Art'].url} alt={serie.title} />

									<div className='movie-info'>
										<h3>
											{serie.programType} {serie.releaseYear}{' '}
										</h3>
									</div>
								</div>
							))
							.slice(0, 21)}
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
