import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
	return (
		<div className="">
			<Provider store={store}>
				<RouterProvider router={route} />
			</Provider>
		</div>
	);
}

export default App;
