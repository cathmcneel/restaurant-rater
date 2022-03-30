const { Review } = require('../models')

const reviewData = [
    {
        review_description: 'Le Coucou good',
        user_id: 1,
        restaurant_id: 1,
    },
    {
        review_description: 'Starbucks good',
        user_id: 1,
        restaurant_id: 2
    },
    {
        review_description: 'Chipotle good',
        user_id: 2,
        restaurant_id: 3
    }
]


const seedReviews = () => Review.bulkCreate( reviewData, {individualHooks: true});

module.exports = seedReviews;