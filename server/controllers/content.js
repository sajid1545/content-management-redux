const Content = require('../models/content');

const addContent = async (req, res) => {
	try {
		const content = req.body;
		const result = await Content.create(content);
		res.send({ status: 'success', result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

const getContents = async (req, res) => {
	try {
		const queries = req.query.sort;

		if (queries === 'firstUpload') {
			const result = await Content.find({}).sort({ createdAt: 1 });
			return res.send({ status: 'success', data: result });
		}

		if (queries === 'lastUpload') {
			const result = await Content.find({}).sort({ createdAt: -1 });
			return res.send({ status: 'success', data: result });
		}

		const result = await Content.find({});
		return res.send({ status: 'success', data: result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'error', error: error.message });
	}
};

module.exports = {
	addContent,
	getContents,
};

