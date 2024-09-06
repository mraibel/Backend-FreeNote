const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')


const Subject = sequelize.define('subject', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    credits:{
        type: Sequelize.INTEGER,
        allowNull: false 
    }
}, {
    timestamps:false
})

module.exports = Subject