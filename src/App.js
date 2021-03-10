import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
const App = () => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/movies' component={Movies} />
					<Route exact path={`/series`} component={Series} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
