import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from './../../../../baseURL';

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	// const [addUser, { isLoading, isError, isSuccess, error}] = useRegisterMutation();

	// useEffect(() => {
	// 	if (isError) {
	// 		toast.error(error);
	// 	}
	// }, [isError, error]);

	const signUp = async (data) => {
		const { name, email, password } = data;
		const userData = {
			name,
			email,
			password,
		};

		// addUser(userData);

		try {
			const response = await axios.post(
				`${baseURL}/api/v1/auth/register`,
				JSON.stringify({ name, email, password }),
				{ headers: { 'Content-type': 'application/json' } }
			);
			toast.success(response.data.message);
			console.log(response.data);
			navigate('/login');
			reset();
		} catch (error) {
			console.log(error);
			toast.error(error.response.data);
		}
	};

	return (
		<section className="px-4 pb-24 mx-auto max-w-7xl mt-20">
			<div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5">
				<h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">
					Create your Free Account
				</h1>
				<p className="mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
					Already have an account?
					<Link to="/login" className="text-purple-700 hover:text-purple-900">
						Sign in
					</Link>
				</p>
				<form onSubmit={handleSubmit(signUp)} className="mt-8 space-y-4">
					<label className="block">
						<span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
						<input
							className="form-input w-full"
							type="text"
							placeholder="Your full name"
							{...register('name', { required: 'Name Address is required' })}
						/>
						{errors.name && <h1 className="text-red-600">{errors.name?.message}</h1>}
					</label>
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
						<span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
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
						{/* {isLoading ? 'Loading...' : 'SignUp'} */}
						Signup
					</button>
				</form>

				<p className="my-5 text-xs font-medium text-center text-gray-700">
					By clicking "Sign Up" you agree to our
					<p className="text-purple-700 hover:text-purple-900">Terms of Service</p>
					and
					<p className="text-purple-700 hover:text-purple-900">Privacy Policy</p>
				</p>
			</div>
		</section>
	);
};

export default Register;
