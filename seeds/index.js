const seedUsers = require('./user-seeds');
const seedRestaurants = require('./restaurant-seeds');
const seedCuisines = require('./cuisine-seeds');
const seedReviews = require('./reveiew-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedCuisines();
  await seedRestaurants();
  await seedReviews();
  process.exit(0);
};

seedAll();
