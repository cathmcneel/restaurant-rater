const { User } = require('../models');

const userData = [
  {
    username: 'Jason',
    password: 'jason'
  },
  {
    username: 'Candy',
    password: 'candy'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;