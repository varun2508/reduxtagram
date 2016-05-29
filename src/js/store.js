import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import comments from '../fixtures/comments.json';
import posts from '../fixtures/posts.json';

const defaultState = { comments, posts };
const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };
