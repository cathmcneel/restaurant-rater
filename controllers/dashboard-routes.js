const router = require('express').Router();
const sequelize = require('../config/connection');
const { Restaurant, User, Review } = require('../models');
const withAuth = require('../utils/auth');


//GET All review
router.get('/', withAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'review_description',
            'restaurant_id'
        ],
        include: [{
            model: Restaurant,
            attributes: ['id', 'restaurant_name', 'restaurant_description', 'cuisine_id', 'rating'],
        }, {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            console.log("fuck");
            console.log(posts);
            res.render('dashboard', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'review_description',
      'restaurant_id'
    ],
    include: [{
      model: Restaurant,
      attributes: ['id', 'restaurant_name', 'restaurant_description', 'cuisine_id', 'rating'],
    }, {
      model: User,
      attributes: ['username']
    }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
