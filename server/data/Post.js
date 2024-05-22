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