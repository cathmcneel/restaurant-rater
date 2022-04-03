const { Cuisine } = require('../models')

const cuisineData = [
    {
        cuisine_name: 'French Restaurant'
    },
    {

        cuisine_name: 'Japanese Restaurant'

    },
    {
        cuisine_name: 'Mexican Grill'
    },
]


const seedCuisines = () => Cuisine.bulkCreate( cuisineData, {individualHooks: true});

module.exports = seedCuisines;