const customersServices = require('../../services/customers');

module.exports = async (req, res, _next) => {
  const customer = req.body;

  const result = await customersServices.create(customer);

  return res.status(result.status).json(result.message);
};
