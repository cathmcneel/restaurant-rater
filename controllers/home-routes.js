const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User, Review, Cuisine } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    Restaurant.findAll({
        attributes: [
            'id',
            'restaurant_name',
            'restaurant_description',
            'rating'
        ],
        include: [{
            model: Review,
            attributes: ['id', 'review_description', 'user_id','restaurant_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
    Restaurant.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'restaurant_name',
            'restaurant_description',
            'rating'
        ],
        include: [{
            model: Review,
            attributes: ['id', 'review_description', 'user_id','restaurant_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const post = dbPostData.get({ plain: true });
        
        res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});




router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});



module.exports = router;
