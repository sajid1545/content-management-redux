const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const ContentSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		tags: {
			type: [],
			required: true,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Content', ContentSchema);
