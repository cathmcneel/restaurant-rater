// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize model (table) by extending off Sequelize's Model class
class Restaurant extends Model {}

// set up fields and rules for Restaurant model
Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    restaurant_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    restaurant_description: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cuisine_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'cuisine',
        key: 'id'
      },
      allowNull: false
    },
    rating: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 10
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'restaurant',
  }
);

module.exports = Restaurant;