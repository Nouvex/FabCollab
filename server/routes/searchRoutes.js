const express = require('express');
const router = express.Router();
const Search = require('./Search');

// GET all searches
router.get('/', async (req, res) => {
  const searches = await Search.findAll();
  res.json(searches);
});

// GET a single search by ID
router.get('/:id', async (req, res) => {
  const search = await Search.findByPk(req.params.id);
  if (search) {
    res.json(search);
  } else {
    res.status(404).send('Search not found');
  }
});

// POST a new search
router.post('/', async (req, res) => {
  const newSearch = await Search.create(req.body);
  res.json(newSearch);
});

// PUT update a search
router.put('/:id', async (req, res) => {
  const updatedSearch = await Search.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(updatedSearch);
});

// DELETE a search
router.delete('/:id', async (req, res) => {
  await Search.destroy({
    where: { id: req.params.id }
  });
  res.send('Search deleted');
});

module.exports = router;