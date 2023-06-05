import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
	const location = useLocation();

	const loginLoader = useSelector((state) => state.user.loginLoading);

	const user = useSelector((state) => state.user.auth);

	const role = useSelector((state) => state.user.auth?.role);

	if (loginLoader) {
		return <div>Loading...</div>;
	}

	if (user && role === 'admin') {
		return children;
	}

	return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
