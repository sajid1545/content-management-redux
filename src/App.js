import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';

function App() {
	return (
		<div className="">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
