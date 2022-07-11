const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, defaultValue: "User"},
    password: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    tag: {type: DataTypes.STRING},
    body: {type: DataTypes.STRING},
    likeArray: {type: DataTypes.ARRAY(DataTypes.STRING)},
    likeCounter: {type: DataTypes.INTEGER}
})

module.exports = {
    User
}