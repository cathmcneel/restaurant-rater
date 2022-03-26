const { Restaurant } = require('../models')

const restaurantData = [
    {
        restaurant_name: 'Le Coucou',
        restaurant_description: 'French restaurant',
        cuisine_id: 1,
        rating: 5
    },
    {
        restaurant_name: 'Starbucks',
        restaurant_description: 'Coffe Shop',
        cuisine_id: 2,
        rating: 4
    },
    {
        restaurant_name: 'Chipotle',
        restaurant_description: 'It is an American chain of fast casual restaurants in the United States',
        cuisine_id: 3,
        rating: 4
    }
]


const seedRestaurants = () => Restaurant.bulkCreate(restaurantData, {individualHooks: true});

module.exports = seedRestaurants;