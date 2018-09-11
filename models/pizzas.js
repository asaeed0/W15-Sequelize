const sequelize = require('../config/connection');
const Sequelize = require('sequelize');

const Pizzas = sequelize.define('pizzas', {
    pizza_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    pizza_name: {
      type: Sequelize.STRING
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
}, {
    freezeTableName: true,
    timestamps: false,
    underscored: true
});

module.exports = Pizzas;