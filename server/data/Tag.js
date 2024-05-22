const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Tag extends Model {}

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags',
    timestamps: false
});

module.exports = Tag;


async function findAll() {
    try {
        // Verwende die Sequelize-Methode findAll(), um alle Benutzer aus der Datenbank abzurufen
        const tags = await Tag.findAll();
        return tags; // Gib die abgerufenen Benutzer zurück
    } catch (error) {
        console.error('Fehler beim Abrufen aller Tags:', error);
        throw error; // Wirf den Fehler weiter, um ihn an den Aufrufer zu propagieren
    }
}