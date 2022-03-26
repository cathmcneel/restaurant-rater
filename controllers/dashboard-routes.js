const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User, Review } = require('../models');
const withAuth = require('../utils/auth');

module.exports = router;
