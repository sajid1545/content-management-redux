import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../features/auth/authApi';
import { setUser } from '../../../../features/auth/authSlice';

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const location = useLocation();
	const navigate = useNavigate();
	let from = location.state?.from?.pathname || '/';
	const dispatch = useDispatch();

	const [loginUser, { isLoading, isError, isSuccess, error, data }] = useLoginMutation();

	useEffect(() => {
		if (isError) {
			toast.error(error);
		}
		if (isSuccess) {
			toast.success(data.message);
			navigate(from, { replace: true });
			localStorage.setItem('user', JSON.stringify(data.data));
			localStorage.setItem('user-token', data.token);
			dispatch(setUser(data?.data));
		}
	}, [isError, isSuccess, error, data, dispatch]);

	const signIn = async (data) => {
		const { email, password } = data;

		const userData = {
			email,
			password,
		};

		loginUser(userData);
	};

	return (
		<section className="px-4 py-24 mx-auto max-w-7xl">
			<div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
				<h1 className="text-4xl font-semibold text-center text-gray-900">Login</h1>

				<form onSubmit={handleSubmit(signIn)} className="space-y-4">
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
						<input
							className="form-input w-full"
							type="email"
							placeholder="Ex. james@bond.com"
							inputMode="email"
							{...register('email', { required: 'Email Address is required' })}
						/>
						{errors.email && <h1 className="text-red-600">{errors.email?.message}</h1>}
					</label>
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
						<input
							{...register('password', { required: 'Password is required' })}
							className="form-input w-full"
							type="password"
							placeholder="••••••••"
							required
						/>
						{errors.password && <h1 className="text-red-600">{errors.password?.message}</h1>}
					</label>
					<button
						type="submit"
						className="w-full py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
						{isLoading ? <span>Loading...</span> : 'Sign In'}
					</button>
				</form>
				<h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
					Create your Free Account
				</h1>
				<p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
					Don't have an account?
					<Link to="/register" className="text-purple-700 hover:text-purple-900">
						Sign up
					</Link>
				</p>
			</div>
		</section>
	);
};

export default Login;
