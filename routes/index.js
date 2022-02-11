const express = require('express');
const router = express.Router();
const { Game } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
  res.render('index');
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { date, time, text, coordsA, coordsB } = req.body;
    await Game.create({ date, time, text, coordsA, coordsB})
  } catch (error) {
    console.log(error)
  }
})

router.get('/find', async (req, res, next) => {
  try {
    res.render('find');
  } catch (error) {
    console.log(error);
  }
});

router.get('/findAll', async (req, res, next) => {
  try {
    const allGames = await Game.findAll({raw: true})
    res.send({allGames});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
