'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');
const {admins} = require('../models/index');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('admins',[{
            email: process.env.ADMIN_EMAIL,
            password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 8),
            firstName: process.env.ADMIN_FIRSTNAME,
            lastName: process.env.ADMIN_LASTNAME
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return admins.destroy({where: {email: process.env.ADMIN_EMAIL}});
    }
}