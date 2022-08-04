const chai = require('chai');
const shell = require('shelljs');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../../api/app');

const { expect } = chai;

describe('Rota /customers/:id, customer update', function () {
  describe('Em caso de sucesso', function () {
    let updateCust = [];
    const updateCustId = 2;
    const custEdit = {
      name: 'Júlia',
      email: 'ju2@test.com',
      address: 'Avenida das Formigas, Jardim dos Tamanduás, 999, Rio das Ostras, RJ.',
      phone: '',
      whatsapp: '033988776655',
      socialMediaLink: 'https://www.linkedin.com/in/juTest/',
    };

    before(async function () {
      shell.exec(
        'npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all',
      );
      updateCust = await chai
        .request(server)
        .put(`/customers/${updateCustId}`)
        .send(custEdit)
    });
    
    it('A requisição deve retornar código de status 201', function () {
      expect(updateCust).to.have.status(201);
    });

    it('E em seu corpo conter elemento igual ao enviado com excessão das chaves id, createdAt e updatedAt', function () {
      const keysToRemove = ['id', 'createdAt', 'updatedAt'];
      keysToRemove.forEach((key) => delete updateCust.body[key]);
      expect(updateCust.body).to.deep.equal(custEdit);
    });
  });

  // describe('Em caso de falha', function () {
  // });
});
