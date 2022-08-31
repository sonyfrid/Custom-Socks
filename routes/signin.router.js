const router = require('express').Router();
const { Users } = require('../db/models');

router.get('/', (req, res) => {
  res.render('signin');
});

router.post('/', async (req, res) => {
  const { name, password } = req.body;
  const user = await Users.findOne({ where: { name, password }, raw: true });
  console.log('>---->>>', user);
  req.session.userId = user.id;
  req.session.name = user.name;
//   console.log('1111', req.session);
// console.log('2222', user.id);

  res.redirect('/lk');
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});
module.exports = router;
