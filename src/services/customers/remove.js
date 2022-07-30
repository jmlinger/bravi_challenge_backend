const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { CUSTOMER_NOT_EXISTS } = require('../../utils/errorSet');

module.exports = async (id) => {
  const findUserById = await Models.customers.findOne({ where: { id } });
  
  if (!findUserById) {
    return CUSTOMER_NOT_EXISTS;
  }

  await Models.customers.destroy({ where: { id } });

  return { status: StatusCodes.OK };
};
