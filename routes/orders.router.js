const router = require('express').Router();
const { Combinations } = require('../db/models');

router.get('/', async (req, res) => {
  const combo = await Combinations.findAll()
  
   res.render('orders');
});

// router.get('/', (req, res) => {
//   res.redirect('/orders');
// });

module.exports = router;
