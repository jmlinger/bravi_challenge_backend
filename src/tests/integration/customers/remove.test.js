const chai = require('chai');
const shell = require('shelljs');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../../api/app');

const { expect } = chai;

describe('Rota /customers/:id, customer remove', function () {
  describe('Em caso de sucesso', function () {
    let removeCust = {};
    let custList = [];
    const removeCustId = 4;

    before(async function () {
      shell.exec(
        'npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all',
      );
      removeCust = await chai
        .request(server)
        .delete(`/customers/${removeCustId}`);
      custList = await chai
        .request(server)
        .get('/customers/search?column=name&string=');
    });
    
    it('A requisição deve retornar código de status 200', function () {
      expect(custList).to.have.status(200);
    });

    it(`Verifica se o elemento com id ${removeCustId} foi removido`, function () {
      custList.body.forEach((cust) =>
        expect(cust).not.to.have.property('id', removeCustId));
    });
  });

  describe('Em caso de falha', function () {
    describe('Tentar remover um cliente com id inexistente', function () {
      let removeCust = {};
      const removeCustId = 7;
      before(async function () {
        shell.exec(
          'npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all',
        );
        removeCust = await chai
          .request(server)
          .delete(`/customers/${removeCustId}`);
      });
      
      it('A requisição deve retornar código de status 401', function () {
        expect(removeCust).to.have.status(401);
      });

      it('E em seu corpo conter uma mensagem', function () {
        expect(removeCust.body).to.equal('Customer not exists');
      });
    });
  });
});
