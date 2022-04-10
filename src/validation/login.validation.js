import Joi from "joi-browser";

const loginSchema = {
  email: Joi.string().min(5).max(255).email().required(),
  password: Joi.string().min(5).max(255).required(),
};

export default loginSchema;
