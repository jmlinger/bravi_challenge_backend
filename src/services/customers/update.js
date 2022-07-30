/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-lines-per-function */
const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { INVALID_ENTRIES, CUSTOMER_NOT_EXISTS } = require('../../utils/errorSet');
const { registerValidation } = require('../../utils/validations/customers');

module.exports = async (id, customer) => {
  const validationError = registerValidation(customer);
  console.log(id, customer);
  if (validationError) {
      return INVALID_ENTRIES(validationError.message);
  }

  const findCustomer = await Models.customers.findByPk(id);
  
  if (!findCustomer) {
    return CUSTOMER_NOT_EXISTS;
  }

  await Models.customers.update(customer, { where: { id } });
  
  const updatedCustomer = await Models.customers.findByPk(id);

  return { status: StatusCodes.OK, message: updatedCustomer };
};
