const Joi = require("joi");

const loginRequestSchema = Joi.object({
	password: Joi.string()
		.min(8)
		.pattern(/(?=.*[a-zA-Z])(?=.*[0-9]).*/)
		.required()
		.messages({
			"string.min": "Your password is too short",
			"string.pattern.base":
				"Your password should contain ateast one alphabet and one number",
			"string.empty": "Password can't be empty",
		}),

	email: Joi.string()
		.email()
		.required()
		.messages({
			"string.empty": "Email can't be empty",
		}),
});

const registerRequestSchema = Joi.object({
	password: Joi.string()
		.min(8)
		.pattern(/(?=.*[a-zA-Z])(?=.*[0-9]).*/)
		.required()
		.messages({
			"string.min": "Your password is too short",
			"string.pattern.base":
				"Your password should contain ateast one alphabet and one number",
			"string.empty": "Password can't be empty",
		}),
	username: Joi.string().required().messages({
		"string.empty": "Username can't be empty",
	}),
	email: Joi.string()
		.email()
		.required()
		.messages({
			"string.empty": "Email can't be empty",
		}),
});

module.exports = {loginRequestSchema, registerRequestSchema};
