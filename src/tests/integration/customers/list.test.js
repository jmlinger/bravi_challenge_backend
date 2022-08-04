const chai = require('chai');
const shell = require('shelljs');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../../api/app');

const { expect } = chai;

describe('Rota /customers/search, customer list', function () {
  let custList = [];

  before(async function () {
    shell.exec(
      'npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all',
    );
    custList = await chai
      .request(server)
      .get('/customers/search?column=name&string=');
  });
  
  it('A requisição deve retornar código de status 200', function () {
    expect(custList).to.have.status(200);
  });

  it('E em seu corpo deve conter um array', function () {
    expect(custList.body).to.be.a('array');
});

  it('No interior desse array deve haver 5 elementos', function () {
    expect(custList.body).to.have.length(5);
  });

  it('Esses elementos devem ser objetos', function () {
    custList.body.forEach((cust) =>
      expect(cust).to.be.an('object'));
  });

  it('E conter as chaves esperadas', function () {
    custList.body.forEach((cust) =>
      expect(cust).to.have.keys(
        'id', 'name', 'email', 'address', 'phone', 'whatsapp', 'socialMediaLink', 'createdAt', 'updatedAt',
      ));
  });
});