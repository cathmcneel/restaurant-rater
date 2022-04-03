// import models
const Restaurant = require('./Restaurant');
const Cuisine = require('./Cuisine');
const Review = require('./Review');
const User = require('./User');

Restaurant.belongsTo(Cuisine, {
  foreignKey: 'cuisine_id',
  // onDelete: 'CASCADE'
})

Cuisine.hasMany(Restaurant, {
  foreignKey: 'cuisine_id'
})

Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id'
})

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
})

User.hasMany(Review, {
  foreignKey: 'user_id'
})

Review.belongsTo(User, {
  foreignKey: 'user_id'
})



module.exports = {
  Restaurant,
  Cuisine,
  Review,
  User
};