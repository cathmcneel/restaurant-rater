const seedUsers = require('./user-seeds');
const seedRestaurants = require('./restaurant-seeds');
const seedCuisines = require('./cuisines-seeds');
const seedReviews = require('./reveiews-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedRestaurants();
  console.log('--------------');

  await seedCuisines();
  console.log('--------------');

  await seedReviews();
  console.log('--------------');

  process.exit(0);
};

seedAll();
