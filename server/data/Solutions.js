const { Sequelize, DataTypes, Model } = require('sequelize');
const Tag = require('./Tag.js')
const sequelize = require('../database.js');

class Solutions extends Model {
    static associate(models) {
        // Eine Lösung kann viele Tags haben
        this.belongsToMany(Tag, { through: SolutionTag });
    }

    static async addSolution(data) {
        try {
            const newSolution = await Solutions.create(data);
            return newSolution;
        } catch (error) {
            console.error('Error adding new solution:', error);
            throw error;
        }
    }
}



Solutions.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visual: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    short_description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    standort: {
        type: DataTypes.STRING
    },
    bewertung_pos: {
        type: DataTypes.INTEGER
    },
    bewertung_neg: {
        type: DataTypes.INTEGER
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
}, {
    sequelize,
    modelName: 'Solutions',
    tableName: 'solutions',
    timestamps: false
});





async function findAll() {
    try {
        // Verwende die Sequelize-Methode findAll(), um alle Benutzer aus der Datenbank abzurufen
        const solutions = await Solutions.findAll();
        return solutions; // Gib die abgerufenen Benutzer zurück
    } catch (error) {
        console.error('Fehler beim Abrufen aller Solutions:', error);
        throw error; // Wirf den Fehler weiter, um ihn an den Aufrufer zu propagieren
    }
}

module.exports = Solutions;