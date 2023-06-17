import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';
import { setUser } from './features/auth/authSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const data = Cookies.get('user');
		if (data) {
			const user = JSON.parse(data);
			console.log(user);
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
