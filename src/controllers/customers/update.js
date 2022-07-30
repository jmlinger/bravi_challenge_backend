const customersServices = require('../../services/customers');

module.exports = async (req, res, _next) => {
  const { params: { id }, body: customer } = req;

  const result = await customersServices.update(id, customer);

  return res.status(result.status).json(result.message);
};
