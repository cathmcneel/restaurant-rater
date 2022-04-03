const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

//Get All review data form db
router.get('/', (req, res) => {
  Review.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get by ID
router.get('/:id', (req, res) => {
    Review.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


//fetch data from database
router.post('/', withAuth, (req, res) => {
  Review.create({
    review_description: req.body.review_description,
    user_id: req.session.user_id,
    restaurant_id: req.body.restaurant_id
  })
    .then(dbCommentData =>  res.json(dbCommentData))

    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

//update review by ID
router.put('/:id', withAuth, (req, res) => {
  Review.update({
    review_description: req.body.review_description
  },
  {
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete review by ID
router.delete('/:id', withAuth, (req, res) => {
  Review.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
