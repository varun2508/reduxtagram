import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import comments from '../fixtures/comments.json';
import posts from '../fixtures/posts.json';

const enhancers = compose(
	window.devToolsExtension
		? window.devToolsExtension()
		: f => f
);

const defaultState = { comments, posts };
const store = createStore(rootReducer, defaultState, enhancers);
const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers').default;

		store.replaceReducer(nextRootReducer);
	});
}

export { store, history };
