const { Reviews } = require('../models')

const reviewdata = [
    {
        review_description: 'Le Coucou good'
    },
    {
        restaurant_name: 'Starbucks good'
    },
    {
        restaurant_name: 'Chipotle good'
    }
]


const seedReviews = () => User.bulkCreate( reviewdata, {individualHooks: true});

module.exports = seedReviews;