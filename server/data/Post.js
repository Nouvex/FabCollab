const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Post extends Model {}

Post.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bewertung: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    timestamps: false
});

module.exports = Post;



async function findAll() {
    try {
        // Verwende die Sequelize-Methode findAll(), um alle Benutzer aus der Datenbank abzurufen
        const posts = await Post.findAll();
        return posts; // Gib die abgerufenen Benutzer zurück
    } catch (error) {
        console.error('Fehler beim Abrufen aller Posts:', error);
        throw error; // Wirf den Fehler weiter, um ihn an den Aufrufer zu propagieren
    }
}