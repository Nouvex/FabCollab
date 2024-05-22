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
    tableName: 'tags'
});

module.exports = Tag;