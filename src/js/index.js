import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import App from './components/App';
import Grid from './components/Grid';
import Detail from './components/Detail';
import styles from '../css/style'; // eslint-disable-line

const app = (
	<Provider store={ store } history={ history} >
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
				<IndexRoute component={ Grid } />
				<Route path="/view/:id" component={ Detail } />
			</Route>
		</Router>
	</Provider>
);

render(app,	document.getElementById('root'));
