const { StatusCodes } = require('http-status-codes');

const INVALID_ENTRIES = (message) => ({
    status: StatusCodes.BAD_REQUEST,
    message: message.replace(/"/g, ''),
});

const ALREADY_REGISTERED = {
  status: StatusCodes.CONFLICT,
  message: 'Customer already registered',
};

const INVALID_FIELDS = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid fields',
};

const CUSTOMER_NOT_EXISTS = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Customer not exists',
};

module.exports = {
  INVALID_ENTRIES,
  ALREADY_REGISTERED,
  INVALID_FIELDS,
  CUSTOMER_NOT_EXISTS,
};