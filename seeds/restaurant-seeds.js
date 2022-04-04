const { Restaurant } = require('../models')

const restaurantData = [
    {
        restaurant_name: 'Le Coucou',
        restaurant_description: 'French Bistro',
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
        restaurant_name: 'Cafe Bella Vita Italian Cuisine',
        restaurant_description: 'Italian Food',
        cuisine_id: 2,
        rating: 5
    },
    {
        restaurant_name: 'Zara Cafe Grill',
        restaurant_description: 'Coffee & Grill',
        cuisine_id: 2,
        rating: 4
    },
    {
        restaurant_name: 'French Louie',
        restaurant_description: 'Modern French Fare.',
        cuisine_id: 3,
        rating: 2
    },

]


const seedRestaurants = () => Restaurant.bulkCreate(restaurantData, {individualHooks: true});

module.exports = seedRestaurants;