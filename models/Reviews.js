const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Reviews extends Model {}

Reviews.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    review_description: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reviews',
  }
);

module.exports = Reviews;