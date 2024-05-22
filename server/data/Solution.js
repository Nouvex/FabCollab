const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class Solution extends Model {}

Solution.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visual: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    standort: {
        type: DataTypes.STRING
    },
    bewertungPos: {
        type: DataTypes.INTEGER
    },
    bewertungNeg: {
        type: DataTypes.INTEGER
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING)
    }
}, {
    sequelize,
    modelName: 'Solution',
    tableName: 'solutions'
});

module.exports = Solution;