const { combineReducers } = require('redux');
const { default: contentReducer } = require('./contentReducer');

const rootReducer = combineReducers({
	content: contentReducer,
});

export default rootReducer;