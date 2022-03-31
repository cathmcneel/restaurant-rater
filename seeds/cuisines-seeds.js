const { Cuisines } = require('../models')

const cuisinedata = [
    {
        cuisine_name: 'French restaurant'
    },
    {
        cuisine_name: 'coffee shop'
    },
    {
        cuisine_name: 'Mexican Grill'
    },
]


const seedCuisines = () => User.bulkCreate( cuisinedata, {individualHooks: true});

module.exports = seedCuisines;