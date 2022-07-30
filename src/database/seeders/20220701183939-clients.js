'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('customers',
    [
      {
        name: 'Frederico',
        email: 'fred@test.com.br',
        address: 'Avenida das Araras, Jardim dos Pássaros, 412, Araúna, RO.',
        phone: '02231665544',
        whatsapp: '022988552266',
        social_media_link: 'https://www.linkedin.com/in/fredTest/',
      },
      {
        name: 'Eduardo',
        email: 'edu@test.com',
        address: 'Rua das Ameixas, Jardim dos Frutos, 229, Gamão, AM.',
        phone: '',
        whatsapp: '044982443377',
        social_media_link: 'https://www.instagram.com/eduTest/',
      },
      {
        name: 'João',
        email: 'joao@test.com.br',
        address: 'Rua das Flores, Jardim dos Tulipas, 131, Lavras, MG.',
        phone: '02233668896',
        whatsapp: '',
        social_media_link: '',
      },
      {
        name: 'Rafaela',
        email: 'rafa@test.com',
        address: 'Alameda dos Anjos, Jardim Paraíso, 716, São Paulo, SP.',
        phone: '',
        whatsapp: '011987112178',
        social_media_link: 'https://twitter.com/rafaTest/',
      },
      {
        name: 'Luísa',
        email: 'lu@test.com.br',
        address: 'Rua das Aves, Jardim dos Pelicanos, 555, Fortaleza, CE.',
        phone: '08537993988',
        whatsapp: '085998423244',
        social_media_link: 'https://www.facebook.com/luTest/',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('customers', null, {}),
};