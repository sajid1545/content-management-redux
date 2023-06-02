import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentCard from '../../../components/ContentCard/ContentCard';
import getContentData from '../../../redux/thunk/getContentData';

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

	const contents = useSelector((state) => state.content.contents);

	useEffect(() => {
		dispatch(getContentData());
	}, [dispatch]);

	if (contents.length) {
		content = contents.map((content) => <ContentCard key={content._id} content={content} />);
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
							<MenuItem onClick={() => console.log('lastUpload')} value={'lastUpload'}>
								Last Upload
							</MenuItem>
							<MenuItem onClick={() => console.log('firstUpload')} value={'firstUpload'}>
								First Upload
							</MenuItem>
						</Select>
					</FormControl>
				</ThemeProvider>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">{content}</div>
		</div>
	);
};

export default Home;
