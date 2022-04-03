const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const reviewRoutes = require('./review-routes');

///api/"router name"
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
