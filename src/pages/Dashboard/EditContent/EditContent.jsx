import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const EditContent = () => {
	const { register, handleSubmit, reset } = useForm();

	const dispatch = useDispatch();
	const location = useLocation();
	const contentID = location.state._id;
	const contents = useSelector((state) => state.content.contents);

	const editableContent = contents.find((content) => content._id === contentID);

	const { title, image, tags, description } = editableContent;

	const [newTags, setNewTags] = useState(tags);

	const submit = (data) => {
		const contentData = {
			title: data.title,
			image: data.image,
			description: data.description,
			tags: newTags,
		};
		console.log(contentData);
	};

	return (
		<div className="flex justify-center items-center h-full">
			<form
				onSubmit={handleSubmit(submit)}
				className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 w-full  max-w-5xl justify-between bg-white">
				<div className="flex flex-col w-full">
					<label className="mb-2" htmlFor="title">
						Title
					</label>
					<input defaultValue={title} type="text" id="title" {...register('title')} />
				</div>
				<div className="flex flex-col w-full">
					<label className="mb-2" htmlFor="image">
						Image
					</label>
					<input defaultValue={image} type="text" name="image" id="image" {...register('image')} />
				</div>

				<div className="w-full">
					<label className="mb-2" htmlFor="tags">
						Tags
					</label>
					<Autocomplete
						multiple
						fullWidth
						onChange={(event, newValue) => {
							setNewTags(newValue);
						}}
						id="tags-filled"
						defaultValue={tags.map((tag) => tag)}
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
						defaultValue={description}
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

export default EditContent;
