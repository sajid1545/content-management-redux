import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes/Routes';
import { addUser } from './redux/actions/userAction';

function App() {
	const userID = useSelector((state) => state.user?.auth?.uid);
	const dispatch = useDispatch();
	const loginLoader = useSelector((state) => state.user.loginLoading);

	useEffect(() => {
		const localStorageUser = localStorage.getItem('user');
		if (localStorageUser) {
			const user = JSON.parse(localStorageUser);
			const userData = user?.data;
			dispatch(addUser(userData));
		}
	}, [userID, dispatch, loginLoader]);

	return (
		<div className="">
			<RouterProvider router={route} />
		</div>
	);
}

export default App;
