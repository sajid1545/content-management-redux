import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

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

	// const contents = useSelector((state) => state.content.contents);
	// const uploadFilters = useSelector((state) => state.filter.filters.uploadFilters);
	// const loading = useSelector((state) => state.content.loading);
	// const tagFilters = useSelector((state) => state.filter.filters.tagFilters);
	// const userID = useSelector((state) => state.user.auth.uid);

	// useEffect(() => {
	// 	dispatch(getContentData());
	// }, [dispatch, uploadFilters]);

	// if (loading === true) {
	// 	content = (
	// 		<div className="h-screen flex justify-center items-center">
	// 			<div className="spinner place-items-center"></div>
	// 		</div>
	// 	);
	// }

	// if (contents.length) {
	// 	content = contents.map((content) => <ContentCard key={content._id} content={content} />);
	// }

	// if (contents.length && tagFilters.length) {
	// 	content = contents
	// 		.filter((content) => {
	// 			if (tagFilters.length) {
	// 				return tagFilters.every((tag) => content.tags.includes(tag));
	// 			}
	// 			return content;
	// 		})
	// 		.map((content) => <ContentCard key={content._id} content={content} />);
	// }

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
							<MenuItem value={'firstUpload'}>First Upload</MenuItem>
							<MenuItem value={'lastUpload'}>Last Upload</MenuItem>
						</Select>
					</FormControl>
				</ThemeProvider>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">{content}</div>
		</div>
	);
};

export default Home;
