import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import userData from './reducers/userReducer';

const store = createStore(userData, applyMiddleware(logger));

export default store;