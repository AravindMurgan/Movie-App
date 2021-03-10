import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Movies = () => {
	let URL =
		'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const res = await axios(URL);
			setMovies(res.data.entries);
			setLoading(false);
		};

		fetchData();
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

	// movies.filter((a)=> a.programType === 'movie').map(a=>{
	// 	return <h3> {a.programType} </h3>
	// })
	// const movieOnly = movies
	// 	.filter((a) => a.programType === 'movie')
	// 	.map((a) => {
	// 		console.log(a.programType);
	// 		return <h3>{a.programType}</h3>;
	// 	});

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
							.filter((a) => a.programType == 'movie')
							.map((movie, index) => (
								<div key={index} className='movie'>
									<img src={movie.images['Poster Art'].url} alt={movie.title} />

									<div className='movie-info'>
										<h3> {movie.programType} </h3>
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

export default Movies;
