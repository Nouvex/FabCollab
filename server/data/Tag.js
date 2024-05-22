const { Sequelize, DataTypes, Model } = require('sequelize');
const Solutions = require('./Solutions.js')
const SolutionTag = require('./SolutionTag.js');
const sequelize = require('../database.js');


class Tag extends Model {
    static associate(models) {
        // Ein Tag kann zu vielen Lösungen gehören
        this.belongsToMany(Solutions, { through: SolutionTag });
    }
}


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


async function findOne(tagName) {
    try {
        

        const tag = await Tag.findOne({
            where: {
                name: tagName
            }
        });
        return tag;
    } catch (error) {
        console.error('Fehler beim Abrufen des Tags:', error);
        throw error;
    }
}

