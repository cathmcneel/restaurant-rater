const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Restaurant, User, Review, Cuisine } = require('../../models');
const withAuth = require('../../utils/auth');

// get all users
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
      attributes: ['id', 'review_description', 'user_id', 'restaurant_id'],
      include: {
        model: User,
        attributes: ['username']
      }
    }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
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
      attributes: ['id', 'review_description', 'user_id', 'restaurant_id'],
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
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update({
    title: req.body.title,
    content: req.body.content
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
