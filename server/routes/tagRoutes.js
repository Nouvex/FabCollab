const express = require('express');
const router = express.Router();
const Tag = require('../data/Tag');

// GET all tags
router.get('/', async (req, res) => {
  const tags = await Tag.findAll();
  res.json(tags);
});

// GET a single tag by ID
router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id);
  if (tag) {
    res.json(tag);
  } else {
    res.status(404).send('Tag not found');
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  const newTag = await Tag.create(req.body);
  res.json(newTag);
});

// PUT update a tag
router.put('/:id', async (req, res) => {
  const updatedTag = await Tag.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(updatedTag);
});

// DELETE a tag
router.delete('/:id', async (req, res) => {
  await Tag.destroy({
    where: { id: req.params.id }
  });
  res.send('Tag deleted');
});

module.exports = router;