require('dotenv').config();

const environment = process.env.NODE_ENV || "production";

const suffix = {
  prod: "",
  production: "",
  dev: "_dev",
  development: "_dev",
  test: "",
};

const options = {
  host: process.env.MYSQL_HOST || 'mysql',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.USE_HEROKU_DB
    ? process.env.MYSQL_DATABASE
    :`${process.env.MYSQL_DB_NAME || 'bravi_challenge'}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
