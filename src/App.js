import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';
import { setUser } from './features/auth/authSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const localStorageUser = localStorage.getItem('user');
		if (localStorageUser) {
			const user = JSON.parse(localStorageUser);
			dispatch(setUser(user));
		}
	}, [dispatch]);

	return (
		<div className="">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
