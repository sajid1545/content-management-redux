import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../Layout/DashboardLayout/Dashboard';
import MainLayout from '../../Layout/Main/MainLayout';
import AddContent from '../../pages/Dashboard/AddContent/AddContent';
import ContentList from '../../pages/Dashboard/ContentList/ContentList';
import EditContent from '../../pages/Dashboard/EditContent/EditContent';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Login from '../../pages/Main/Auth/Login/Login';
import Register from '../../pages/Main/Auth/Register/Register';
import Home from '../../pages/Main/Home/Home';
import ReadingHistory from '../../pages/Main/ReadingHistory/ReadingHistory';

export const route = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/reading-history',
				element: <ReadingHistory />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},

	{
		path: '/dashboard',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/dashboard',
				element: <ContentList />,
			},
			{
				path: '/dashboard/add-content',
				element: <AddContent />,
			},
			{
				path: '/dashboard/edit-content',
				element: <EditContent />,
			},
		],
	},
]);
