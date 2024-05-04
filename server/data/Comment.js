const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', { host: 'localhost', dialect: 'postgres' });

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bewertung: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
});

module.exports = Comment;