import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../../Layout/DashboardLayout/Dashboard';
import MainLayout from '../../Layout/Main/MainLayout';
import AddContent from '../../pages/Dashboard/AddContent/AddContent';
import ContentList from '../../pages/Dashboard/ContentList/ContentList';
import Home from '../../pages/Main/Home/Home';
import ReadingHistory from '../../pages/Main/ReadingHistory/ReadingHistory';

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
				path: '/dashboard',
				element: <ContentList />,
			},
			{
				path: '/dashboard/add-content',
				element: <AddContent />,
			},
		],
	},
]);
