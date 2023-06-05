import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';

function App() {
	const userID = useSelector((state) => state.user.auth.uid);

	useEffect(() => {
		if (!userID) {
			localStorage.removeItem('user-token');
		}
	}, [userID]);

	return (
		<div className="">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
