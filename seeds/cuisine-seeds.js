const { Cuisine } = require('../models')

const cuisineData = [
    {
        cuisine_name: 'French Restaurant'
    },
    {
<<<<<<< HEAD
        cuisine_name: 'Coffee Shop'
=======

        cuisine_name: 'Japanese Restaurant'

>>>>>>> develop
    },
    {
        cuisine_name: 'Mexican Grill'
    },
]


const seedCuisines = () => Cuisine.bulkCreate( cuisineData, {individualHooks: true});

module.exports = seedCuisines;