import filterReducer from './filterReducer';

const { combineReducers } = require('redux');
const { default: contentReducer } = require('./contentReducer');

const rootReducer = combineReducers({
	content: contentReducer,
	filter: filterReducer,
});

export default rootReducer;
