const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('lk');
});

// router.get('/index', (req, res) => {
//   res.redirect('/');
// });

module.exports = router;