const { loginRequestSchema, registerRequestSchema } = require('../validators/auth-validator');
// const { validatePassword } = require("../utils/hashingService");
const {hashPassword, validatePassword} = require('../util/hashing-service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../database/models/user');


const register = async (req, res, next) => {
    
    

    try {
		const validatedRequest = await registerRequestSchema.validateAsync(
			req.body
		);
        let { username, email, password } = validatedRequest;
		const hashedPassword = await hashPassword(validatedRequest["password"]);
		const user = new User({ username, email, password: hashedPassword });
        await user.save();
		user != null
			? res.status(200).json(user)
			: res.status(400).json({ message: "User not created" });
	} catch (err) {
		if (err.name == "SequelizeUniqueConstraintError") {
			return res
				.status(400)
				.json({ message: "Invalid Email. Please use another email" });
		}
		return res.status(400).json({ message: err.message });
	}

};

const login = async (req, res, next) => {

    
    try {
        validatedRequest = await loginRequestSchema.validateAsync(req.body);
    
        const { email, password } = validatedRequest;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const hashedPassword = user.password;
		let isValidPasword = await validatePassword({
			hashedPassword: hashedPassword,
			password: password,
		});
		
        const authToken = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
            expiresIn: '1 hour'
          });
          

		if (isValidPasword) {
			return res.json({token:authToken});
		} else {
			res.status(400).json({ message: "Invalid Credentials" });
		}
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        });
    }
};

const getUser = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.query.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        });
    }
};

module.exports = { register, login, getUser};