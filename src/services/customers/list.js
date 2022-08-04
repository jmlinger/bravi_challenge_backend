const { StatusCodes } = require('http-status-codes');
const moment = require('moment');
const { Sequelize } = require('../../database/models');
const Models = require('../../database/models');

const { Op } = Sequelize;

module.exports = async (query) => {
  const { column, string } = query;

  const queryOption = {
    where: {
      [column]: {
        [Op.like]: `%${string}%`,
      },
    },
  };

  if (column === 'createdAt' || column === 'updatedAt') {
    const custList = await Models.customers.findAll();
    const custListByDate = custList.filter(
      (cust) => moment(cust[column]).format('DD/MM/YYYY HH:mm').includes(string),
    );

    return { status: StatusCodes.OK, message: custListByDate };
  }

  const custList = await Models.customers.findAll(queryOption);
  return { status: StatusCodes.OK, message: custList };
};
