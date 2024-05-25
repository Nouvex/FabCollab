const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database.js');

class SolutionTag extends Model {}

SolutionTag.init({
    solutionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Solutions',
            key: 'id'
        }
    },
    tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Tags',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'SolutionTag',
    tableName: 'solution_tags',
    timestamps: false
});

module.exports = SolutionTag;