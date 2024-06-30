const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Stock = sequelize.define('Stock', {
  symbol: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mentions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sentiment: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Stock;