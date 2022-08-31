const router = require('express').Router();
const { Users } = require('../db/models');

router.get('/', (req, res) => {
  res.render('signup');
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const user = await Users.create(req.body, { raw: true });
  req.session.id = user.dataValues.id; // для входа
  req.session.name = user.dataValues.name;

  res.redirect('/lk');
});
module.exports = router;
