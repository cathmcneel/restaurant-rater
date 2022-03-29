// import models
const Restaurant = require('./Restaurant');
const Cuisine = require('./Cuisine');
const Review = require('./Review');
const User = require('./User');
// const ProductTag = require('./ProductTag');

// Products belongsTo Category
Restaurant.belongsTo(Cuisine, {
  foreignKey: 'cuisine_id',
  // onDelete: 'CASCADE'
})
// Categories have many Products
Cuisine.hasMany(Restaurant, {
  foreignKey: 'cuisine_id'
})
// 
Restaurant.hasMany(Review, {
  foreignKey: 'restaurant_id'
})

Review.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id'
})
// // 
// Reviews.belongsToMany(Restaurant, {
//   foreignKey:''
// })
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