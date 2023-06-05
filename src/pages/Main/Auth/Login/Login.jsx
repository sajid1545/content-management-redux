import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const signIn = (data) => {
		console.log(data);
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
						Sign In
					</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
