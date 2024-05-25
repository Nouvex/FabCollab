const bcrypt = require('bcrypt');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize =require('../database.js'); // Replace with your database credentials

class User extends Model {
    async comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});

async function findAll() {
    try {
        // Verwende die Sequelize-Methode findAll(), um alle Benutzer aus der Datenbank abzurufen
        const users = await User.findAll();
        return users; // Gib die abgerufenen Benutzer zurück
    } catch (error) {
        console.error('Fehler beim Abrufen aller Benutzer:', error);
        throw error; // Wirf den Fehler weiter, um ihn an den Aufrufer zu propagieren
    }
}

// Exportiere die Methode, um sie in anderen Dateien verwenden zu können
module.exports = {
    findAll: findAll
};