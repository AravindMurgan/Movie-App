import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Movies = () => {
	///API url and states///

	let URL =
		'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	///ComponentDidMount///

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const res = await axios.get(URL);
			setMovies(res.data.entries);
			setLoading(false);
		};

		fetchData();
		// eslint-disable-next-line
	}, []);

	//sorting//
	movies.sort((a, b) => {
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
							<p>Popular Movies</p>
							<Link to='/' className='btn btn-dark '>
								Home
							</Link>
						</nav>
						{movies
							.filter((a) => a.programType === 'movie' && a.releaseYear >= 2010)
							.map((movie, index) => (
								<div key={index} className='movie'>
									<img src={movie.images['Poster Art'].url} alt={movie.title} />

									<div className='movie-info'>
										<h3>
											{movie.programType} {movie.releaseYear}
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

export default Movies;
