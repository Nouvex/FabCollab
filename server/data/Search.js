const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Search extends Model {}

Search.init({
    entry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: 'Search',
    tableName: 'searches'
});

module.exports = Search;