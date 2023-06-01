import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../Layout/DashboardLayout/Dashboard';
import MainLayout from '../../Layout/Main/MainLayout';
import Home from '../../pages/Main/Home/Home';
import ReadingHistory from '../../pages/Main/ReadingHistory/ReadingHistory';
import AddContent from '../../pages/Dashboard/AddContent/AddContent';

export const route = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/reading-history',
				element: <ReadingHistory />,
			},
		],
	},

	{
		path: '/dashboard',
		element: <Dashboard />,
		children: [
			{
				path:'/dashboard/add-content',
				element: <AddContent/>
			}
		],
	},
]);
