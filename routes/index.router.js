const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

// router.get('/index', (req, res) => {
//   res.redirect('/');
// });

module.exports = router;
