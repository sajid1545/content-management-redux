import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
	return (
		<div className="grid grid-cols-12  gap-3 ">
			<DashboardSidebar />
			<div className="col-span-10 w-full bg-gray-100 rounded-lg p-2">
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
