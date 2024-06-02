const express = require('express');
const router = express.Router();
const multer = require('multer');
const Solutions = require('../data/Solutions');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.get('/', async (req, res) => {
    const solutions = await Solutions.findAll();
    res.json(solutions);
});

router.get('/:id', async (req, res) => {
    const solution = await Solutions.findByPk(req.params.id);
    if (solution) {
        res.json(solution);
    } else {
        res.status(404).send('Solution not found');
    }
});

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, description, short_description, link, standort, tags } = req.body;
        const visual = req.file ? req.file.filename : ''; // Use filename if file exists, else empty string

        const newSolution = await Solutions.create({
            name,
            description, 
            short_description,
            link,
            standort,
            tags: tags.split(',').map(tag => tag.trim()), // Convert tags to array
            visual
        });

        res.json(newSolution);
    } catch (error) {
        console.error('Error adding solution:', error);
        res.status(500).send('Internal server error');
    }
});

router.put('/:id', async (req, res) => {
    const updatedSolution = await Solutions.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(updatedSolution);
});

router.delete('/:id', async (req, res) => {
    await Solutions.destroy({
        where: { id: req.params.id }
    });
    res.send('Solution deleted');
});

module.exports = router;
