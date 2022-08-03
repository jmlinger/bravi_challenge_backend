const customersServices = require('../../services/customers');

module.exports = async (req, res, _next) => {
  const { query } = req;
  const result = await customersServices.list(query);

  return res.status(result.status).json(result.message);
};
