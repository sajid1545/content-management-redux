import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddContent = () => {
	const { register, handleSubmit } = useForm();

	const [tags, setTags] = useState([]);

	const submit = (data) => {
		const contentData = {
			title: data.title,
			image: data.image,
			description: data.description,
			tags,
		};
		console.log(contentData);
	};

	return (
		<div className="flex justify-center items-center h-full">
			<form
				onSubmit={handleSubmit(submit)}
				className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-5xl justify-between bg-white">
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

				{/* <div className="flex flex-wrap justify-between w-full">
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
				</div> */}

				<div className="w-full">
					<label className="mb-2" htmlFor="tags">
						Tags
					</label>
					<Autocomplete
						multiple
						onChange={(event, newValue) => {
							setTags(newValue);
						}}
						id="tags-filled"
						options={[]}
						sx={{ mt: 2 }}
						freeSolo
						renderTags={(value, getTagProps) =>
							value.map((option, index) => (
								<Chip variant="outlined" label={option} {...getTagProps({ index })} />
							))
						}
						renderInput={(params) => (
							<TextField {...params} variant="outlined" label="Tags" placeholder="Tags" />
						)}
					/>
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
				<div className="flex justify-between items-center w-full">
					<button
						className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
						type="submit">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddContent;
