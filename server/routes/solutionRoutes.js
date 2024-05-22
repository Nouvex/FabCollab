const express = require('express');
const router = express.Router();
const Solution = require('../data/Solutions');

// GET all solutions
router.get('/', async (req, res) => {
  const solutions = await Solution.findAll();
  res.json(solutions);
});

// GET a single solution by ID
router.get('/:id', async (req, res) => {
  const solution = await Solution.findByPk(req.params.id);
  if (solution) {
    res.json(solution);
  } else {
    res.status(404).send('Solution not found');
  }
});

// POST a new solution
router.post('/', async (req, res) => {
  const newSolution = await Solution.create(req.body);
  res.json(newSolution);
});

// PUT update a solution
router.put('/:id', async (req, res) => {
  const updatedSolution = await Solution.update(req.body, {
    where: { id: req.params.id }
  });
  res.json(updatedSolution);
});

// DELETE a solution
router.delete('/:id', async (req, res) => {
  await Solution.destroy({
    where: { id: req.params.id }
  });
  res.send('Solution deleted');
});

module.exports = router;