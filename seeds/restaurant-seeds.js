const { Restaurant } = require('../models')

const restaurantdata = [
    {
        restaurant_name: 'Le Coucou',
        restaurant_description: 'After taking Paris by storm, internationally acclaimed chef Daniel Rose returns home with Le Coucou. A gracious modern nod to fine European gastronomy, Rose shrinks the intercontinental divide separating the City of Light and the Big Apple, proving that the true essence of fine French dining can thrive in any time zone.',
        cuisine_id: '1',
        rating: '5'
    },
    {
        restaurant_name: 'Starbucks',
        restaurant_description: 'Coffe Shop',
        cuisine_id: '2',
        rating: '4'
    },
    {
        restaurant_name: 'Chipotle',
        restaurant_description: 'It is an American chain of fast casual restaurants in the United States',
        cuisine_id: '3',
        rating: '4'
    }
]


const seedRestaurants = () => User.bulkCreate(restaurantdata, {individualHooks: true});

module.exports = seedRestaurants;