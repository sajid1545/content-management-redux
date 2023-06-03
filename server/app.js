const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const connectDB = require('./db/connectDB');
const PORT = process.env.PORT || 5000;

// middlewares

app.use(express.json());
app.use(cors());

// middleware to set router

app.use('/api/v1/content', require('./routes/content'));


app.get('/', (req, res) => {
	res.send('Content app server  is working');
});


const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Content app server in running on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};
start();

module.exports = app;
