import React from 'react';
import Layout from './components/Layout';
import Forms from './components/Forms';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
	return (
		<div className='App'>
			<div className='App-header'>
				<Container>
					<Forms />
					<Layout />
				</Container>
			</div>
		</div>
	);
};

export default App;
