const User = require('../models/user');
const bcrypt = require('bcrypt');
const { v5: uuidv5 } = require('uuid');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const duplicate = await User.findOne({ email });
	if (duplicate) return res.status(400).send('Email already exists');

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const trimmedName = name.replace(/\s+/g, '_');
		const user_name = trimmedName.toLowerCase();
		const uuid = uuidv5(name, process.env.MY_NAMESPACE);

		const uniqueUserToken = `${user_name}_${uuid}`;

		const result = await User.create({
			name,
			email,
			password: hashedPassword,
			uid: uniqueUserToken,
		});

		res.status(201).send({ message: 'User created successfully', result });
	} catch (error) {
		console.log(error);
		res.status(400).send({ message: error.message });
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	const foundUser = await User.findOne({ email });
	console.log('Found User', foundUser);
	if (!foundUser) return res.status(400).send('Email or password is incorrect');

	const match = await bcrypt.compare(password, foundUser.password);
	if (match) {
		const access_token = jwt.sign({ foundUser }, process.env.SECRET_ACCESS_TOKEN, {
			expiresIn: '1d',
		});

		return res
			.status(200)
			.send({ message: 'Login successful!', token: access_token, data: foundUser });
	} else {
		return res.status(400).send('Password is incorrect');
	}
};

module.exports = {
	register,
	login,
};
