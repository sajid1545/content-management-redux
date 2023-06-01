import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	ThemeProvider,
	createTheme,
} from '@mui/material';
import React from 'react';

const theme = createTheme({
	palette: {
		primary: {
			main: '#43eab2',
		},
	},
});

const Home = () => {
	return (
		<div className="max-w-7xl gap-14 mx-auto my-10">
			<div className=" flex justify-end">
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
		</div>
	);
};

export default Home;
