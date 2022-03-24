// import models
const Restaurant = require('./Restaurant');
const Cuisines = require('./Cuisines');
const Reviews = require('./Reviews');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Restaurant.belongsTo(Cuisines, {
  foreignKey: 'cuisine_id',
  onDelete: 'CASCADE'
})
// Categories have many Products
Cuisines.hasMany(Restaurant, {
  foreignKey: 'category_id'
})
// 
Reviews.belongsToMany(Restaurant, {


})
// 
Reviews.belongsToMany(Restaurant, {

})


module.exports = {
  Restaurant,
  Cuisines,
  Reviews,
};