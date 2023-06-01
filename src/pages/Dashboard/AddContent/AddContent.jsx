import React from 'react';
import { useForm } from 'react-hook-form';

const AddContent = () => {
	const { register, handleSubmit } = useForm();

	return (
		<div className="flex justify-center items-center h-full">
			<form
				className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-5xl justify-between bg-white"
				action="">
				<div className="flex flex-col w-full">
					<label className="mb-2" htmlFor="title">
						Title
					</label>
					<input type="text" id="title" {...register('title')} />
				</div>
				<div className="flex flex-col w-full">
					<label className="mb-2" htmlFor="image">
						Image
					</label>
					<input type="text" name="image" id="image" {...register('image')} />
				</div>

				<div className="flex flex-wrap justify-between w-full">
					<div className="flex flex-col w-full lg:w-[40%] ">
						<label className="mb-2" htmlFor="contentTag1">
							Content Tag 1
						</label>
						<input
							placeholder="Content Tag 1"
							type="text"
							name="contentTag1"
							id="contentTag1"
							{...register('contentTag1')}
						/>
					</div>
					<div className="flex flex-col w-full lg:w-[40%]  ">
						<label className="mb-2" htmlFor="contentTag2">
							Content Tag 2
						</label>
						<input
							placeholder="Content Tag 2"
							type="text"
							name="contentTag2"
							id="contentTag2"
							{...register('contentTag2')}
						/>
					</div>
				</div>

				<div className="flex flex-col w-full">
					<label className="mb-2" htmlFor="description">
						Description
					</label>
					<textarea
						name="description"
						id="description"
						cols="30"
						rows="5"
						{...register('description')}></textarea>
				</div>
			</form>
		</div>
	);
};

export default AddContent;
