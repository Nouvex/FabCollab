const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', { host: 'localhost', dialect: 'postgres' });

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
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bewertung: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
});

module.exports = Post;