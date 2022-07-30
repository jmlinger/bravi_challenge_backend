const Joi = require('joi');

const customerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  address: Joi.string().min(10).required(),
  phone: Joi.string().allow('').required().length(11),
  whatsapp: Joi.string().allow('').required().length(12),
  socialMediaLink: Joi.string().allow('').required().uri(),
});

const validationError = (customer) => customerSchema.validate(customer).error;

module.exports = {
  registerValidation: (customer) =>
    (validationError(customer) ? validationError(customer).details[0] : null),
};
