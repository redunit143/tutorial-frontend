import { combineReducers } from 'redux';

import todoReducer from './todoReducer';


const myReducers = combineReducers({
	todoReducer
});

export default myReducers;