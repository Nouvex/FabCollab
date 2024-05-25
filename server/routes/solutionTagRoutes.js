const express = require('express');
const router = express.Router();
const Solutions = require('../data/Solutions');
const Tag = require('../data/Tag');
const Sequelize = require('sequelize');







router.get('/:tagName', async (req, res) => {
    try {
        const tagName = req.params.tagName;

        // Finde den Tag mit dem angegebenen Namen
        const tag = await Tag.findOne({ where: { name: tagName } });

        if (!tag) {
            // Wenn der Tag nicht gefunden wurde, sende eine entsprechende Nachricht zurück
            return res.status(404).json({ message: 'Tag not found' });
        }

        // Finde alle Lösungen, die den Tag im Array "tags" haben
        const solutions = await Solutions.findAll({ 
            where: {
                tags: { [Sequelize.Op.contains]: [tagName] }
            }
        });

        res.json(solutions);
    } catch (error) {
        console.error('Fehler beim Abrufen der Lösungen:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;




