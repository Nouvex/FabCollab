const express = require('express');
const router = express.Router();
const Comment = require('./Comment');

// GET all comments
router.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
});

// GET a single comment by ID
router.get('/:id', async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// POST a new comment
router.post('/', async (req, res) => {
  const newComment = await Comment.create(req.body);
  res.json(newComment);
});

// PUT update a comment
router.put('/:id', async (req, res) => {
  const updatedComment = await Comment.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(updatedComment);
});

// DELETE a comment
router.delete('/:id', async (req, res) => {
  await Comment.destroy({
    where: { id: req.params.id }
  });
  res.send('Comment deleted');
});

module.exports = router;