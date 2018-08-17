'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      classId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      teacherId : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      startingDate : {
        type: Sequelize.DATEONLY
      },
      endingDate : {
        type: Sequelize.DATEONLY
      },
      startingTime:{
        type: Sequelize.TIME
      },
      enddingTime: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('courses');
  }
};