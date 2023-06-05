import filterReducer from './filterReducer';
import userReducer from './userReducer';

const { combineReducers } = require('redux');
const { default: contentReducer } = require('./contentReducer');

const rootReducer = combineReducers({
	content: contentReducer,
	filter: filterReducer,
	user: userReducer,
});

export default rootReducer;
