const customersServices = require('../../services/customers');
 
module.exports = async (req, res, _next) => {
  const { id } = req.params;

  const result = await customersServices.remove(id);

  return res.status(result.status).json(result.message);
};
