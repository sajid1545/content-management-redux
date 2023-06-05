import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';
import { loadUser } from './redux/actions/userAction';

function App() {
	const userID = useSelector((state) => state.user?.auth?.uid);
	const dispatch = useDispatch();

	useEffect(() => {
		const localStorageUser = localStorage.getItem('user');
		const user = JSON.parse(localStorageUser);

		// dispatch(loadUser(user));


		if (!userID) {
			localStorage.removeItem('user-token');
			localStorage.removeItem('user');
		}
	}, [userID,dispatch]);

	return (
		<div className="">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
