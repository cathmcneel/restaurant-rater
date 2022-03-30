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

    },
    {
        restaurant_name: 'Cafe Bella Vita Italian Restaurant',
        restaurant_description: 'Italian Food',
        cuisine_id: 2,
        rating: 5
    },
    {
        restaurant_name: 'Zara Cafe Grill',
        restaurant_description: 'Coffe and grill',
        cuisine_id: 2,
        rating: 4
    },
    {
        restaurant_name: 'French Louie',
        restaurant_description: 'A French-American restaurant and cafe in Brooklyn.',
        cuisine_id: 3,
        rating: 2
    },

]


const seedRestaurants = () => Restaurant.bulkCreate(restaurantData, {individualHooks: true});

module.exports = seedRestaurants;