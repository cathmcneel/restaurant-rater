const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Restaurant, User, Review, Cuisine } = require('../../models');
const withAuth = require('../../utils/auth');

// // get all users
// // router.get('/', (req, res) => {
// //   Restaurant.findAll({
// //     attributes: [
// //       'id',
// //       'restaurant_name',
// //       'restaurant_description',
// //       'rating'
// //     ],
// //     include: [{
// //       model: Review,
// //       attributes: ['id', 'review_description', 'user_id', 'restaurant_id'],
// //       include: {
// //         model: User,
// //         attributes: ['username']
// //       }
// //     }
// //     ]
// //   })
// //   .then(dbPostData => res.json(dbPostData))
// //   .catch(err => {
// //     console.log(err);
// //     res.status(500).json(err);
// //   });
// // });

// router.get('/:id', (req, res) => {
//   Restaurant.findOne({
//     where: {
//       id: req.params.id   
//      },
//     attributes: [
//       'id',
//       'restaurant_name',
//       'restaurant_description',
//       'rating'
//     ],
//     include: [{
//       model: Review,
//       attributes: ['id', 'review_description', 'user_id', 'restaurant_id'],
//       include: {
//         model: User,
//         attributes: ['username']
//       }
//     }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



module.exports = router;
