import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
