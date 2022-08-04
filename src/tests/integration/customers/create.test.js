const chai = require('chai');
const shell = require('shelljs');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../../api/app');

const { expect } = chai;

describe('Rota /customers, customer create', function () {
  const newCust = {
    name: 'Júlia',
    email: 'ju2@test.com',
    address: 'Avenida das Formigas, Jardim dos Tamanduás, 999, Rio das Ostras, RJ.',
    phone: '',
    whatsapp: '033988776655',
    socialMediaLink: 'https://www.linkedin.com/in/juTest/',
  };

  describe('Em caso de sucesso', function () {
    let createCust = [];

    before(async function () {
      shell.exec(
        'npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all',
      );
      createCust = await chai
        .request(server)
        .post(`/customers`)
        .send(newCust)
    });
    
    it('A requisição deve retornar código de status 201', function () {
      expect(createCust).to.have.status(201);
    });

    it('E em seu corpo conter elemento igual ao enviado com excessão das chaves id, createdAt e updatedAt', function () {
      const keysToRemove = ['id', 'createdAt', 'updatedAt'];
      keysToRemove.forEach((key) => delete createCust.body[key]);
      expect(createCust.body).to.deep.equal(newCust);
    });
  });

  // describe('Em caso de falha', function () {
  // });
});
