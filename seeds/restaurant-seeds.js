const { Restaurant } = require('../models')

const restaurantData = [
    {
        restaurant_name: 'Le Coucou',
        restaurant_description: 'French Restaurant',
        cuisine_id: 1,
        rating: 5
    },
    {
        restaurant_name: 'Starbucks',
        restaurant_description: 'Coffee Shop',
        cuisine_id: 2,
        rating: 4
    },
    {
        restaurant_name: 'Chipotle',
        restaurant_description: 'Mexican fast casual',
        cuisine_id: 3,
        rating: 4
    },
    {
        restaurant_name: 'Shake Shack',
        restaurant_description: 'Burger Shop',
        cuisine_id: 4,
        rating: 4
    },
    {
        restaurant_name: 'Franks Italian',
        restaurant_description: 'Italian homestyle food',
        cuisine_id: 5,
        rating: 4.5
    },
    {
        restaurant_name: 'Golden Unicorn',
        restaurant_description: 'Chinese Dim Sum',
        cuisine_id: 6,
        rating: 4
    },
    {
        restaurant_name: 'Twelve Chairs',
        restaurant_description: 'Israeli style food',
        cuisine_id: 7,
        rating: 5
    },
    {
        restaurant_name: 'Catch Steak',
        restaurant_description: 'Steakhouse',
        cuisine_id: 8,
        rating: 4
    }
]


const seedRestaurants = () => Restaurant.bulkCreate(restaurantData, {individualHooks: true});

module.exports = seedRestaurants;