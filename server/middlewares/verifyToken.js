const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res
			.status(401)
			.send({ message: 'Invalid authorization. Login in order to get a token' });
	}

	const token = authHeader.split(' ')[1];

	jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, decoded) => {
		if (err) {
			return res.status(403).send({ message: 'Forbidden Access' });
		}
		req.decoded = decoded;
		next();
	});
};

module.exports = verifyToken;
