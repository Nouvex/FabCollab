const express = require('express');
const router = express.Router();
const Post = require('../data/Post');

// GET all posts
router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// GET a single post by ID
router.get('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

// POST a new post
router.post('/', async (req, res) => {
  const newPost = await Post.create(req.body);
  res.json(newPost);
});

// PUT update a post
router.put('/:id', async (req, res) => {
  const updatedPost = await Post.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(updatedPost);
});

// DELETE a post
router.delete('/:id', async (req, res) => {
  await Post.destroy({
    where: { id: req.params.id }
  });
  res.send('Post deleted');
});

module.exports = router;