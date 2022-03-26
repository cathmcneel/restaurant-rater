const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    review_description: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'restaurant',
        key: 'id'
      }
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

module.exports = Review;