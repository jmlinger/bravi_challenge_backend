module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    socialMediaLink: DataTypes.STRING,
  }, 
  { tableName: 'customers', underscored: true });

  return customers;
};