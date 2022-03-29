const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Cuisine extends Model {}

Cuisine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cuisine_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cuisine',
  }
);

module.exports = Cuisine;