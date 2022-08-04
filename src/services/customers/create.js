const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { INVALID_ENTRIES, ALREADY_REGISTERED } = require('../../utils/errorSet');
const { registerValidation } = require('../../utils/validations/customers');

module.exports = async (customer) => {
  const validationError = registerValidation(customer);

  if (validationError) {
      return INVALID_ENTRIES(validationError.message);
  }

  const { email } = customer;

  const findcustomer = await Models.customers.findOne({ where: { email } });

  if (findcustomer) {
      return ALREADY_REGISTERED;
  }

  const newCustomer = await Models.customers.create(customer);

  return { status: StatusCodes.CREATED, message: newCustomer };
};
