const express = require('express');
const router = express.Router();
const User = require('../data/Users');
const Users = require('../data/Users');


// GET Route für alle Benutzer
router.get('/', async (req, res) => {
  try {
      const users = await Users.findAll();
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: 'Fehler beim Abrufen aller Benutzer' });
  }
});




// GET a single user by ID
router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// PUT update a user
router.put('/:id', async (req, res) => {
  const updatedUser = await User.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(updatedUser);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  await User.destroy({
    where: { id: req.params.id }
  });
  res.send('User deleted');
});

module.exports = router;