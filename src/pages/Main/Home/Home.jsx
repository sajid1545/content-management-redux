import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetContentQuery } from '../../../features/content/contentApi';
import { toggleUploadFilter } from '../../../features/content/contentSlice';
import ContentCard from './../../../components/ContentCard/ContentCard';

const theme = createTheme({
	palette: {
		primary: {
			main: '#43eab2',
		},
	},
});

const Home = () => {
	const dispatch = useDispatch();
	let content;

	const uploadFilters = useSelector((state) => state.content.uploadFilters);
	const tagFilters = useSelector((state) => state.content.tagFilters);

	const { data, isLoading } = useGetContentQuery(uploadFilters);
	const contents = data?.data;

	if (isLoading) {
		content = <h1 className="text-5xl">Loading...</h1>;
	}

	if (contents?.length) {
		content = contents.map((content) => <ContentCard key={content._id} content={content} />);
	}

	if (contents.length && tagFilters.length) {
		content = contents
			.filter((content) => {
				if (tagFilters.length) {
					return tagFilters.every((tag) => content.tags.includes(tag));
				}
				return content;
			})
			.map((content) => <ContentCard key={content._id} content={content} />);
	}

	return (
		<div className="max-w-7xl gap-14 mx-auto my-10">
			{/* Filter Field */}
			<div className=" flex justify-end mb-10">
				<ThemeProvider theme={theme}>
					<FormControl>
						<InputLabel id="demo-simple-select-label">Filter</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Filter"
							defaultValue=""
							variant="outlined"
							className="custom-addUser-input w-[200px]  h-[60px] "
							sx={{ textAlign: 'left' }}>
							<MenuItem
								onClick={() => dispatch(toggleUploadFilter('firstUpload'))}
								value={'firstUpload'}>
								First Upload
							</MenuItem>
							<MenuItem
								onClick={() => dispatch(toggleUploadFilter('lastUpload'))}
								value={'lastUpload'}>
								Last Upload
							</MenuItem>
						</Select>
					</FormControl>
				</ThemeProvider>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">{content}</div>
		</div>
	);
};

export default Home;
