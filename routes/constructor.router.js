const router = require('express').Router();
const { Prints, Socks, Pictures } = require('../db/models');



router.get('/', async (req, res) => {
  const prints = await Prints.findAll();
  // ({ offset: 1 });
  const pictures = await Pictures.findAll();
  // ({ offset: 1 });
  const colors = await Socks.findAll();
  // ({ offset: 1 });
  // console.log('>>>>>>>>>', prints, pictures, colors);
  res.render('constructor', { prints, pictures, colors });
});

module.exports = router;
