import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {

    const location = useLocation()

	return (
		<div className="col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg">
			<ul className="flex gap-3  flex-col h-full">
				<li className='mb-10'>Admin Dashboard</li>
				<li className='mb-4 bg-amber-200 p-4 rounded-md'>
					<Link to="/dashboard">Content List</Link>
				</li>
				<li className='mb-4 bg-amber-200 p-4 rounded-md'>
					<Link to="/dashboard/add-content"> Add Content </Link>
				</li>
				<li className="mt-auto">
					<Link to="/"> Back to Home </Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardSidebar;
