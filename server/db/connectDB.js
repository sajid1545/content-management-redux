const mongoose = require('mongoose');
const colors = require('colors');
mongoose.set('strictQuery', true);

const connectDB = async (uri) => {
	try {
		mongoose.connect(uri).then(() => {
			console.log('Connected to Database Successfully'.green.bold.italic);
		});
	} catch (error) {
		console.log('Something went wrong', error);
	}
};

module.exports = connectDB;
