const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')

const Event = sequelize.define('event', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT 
    },
    fecha:{
        type: Sequelize.DATE,
        allowNull: false 
    },
    hour:{
        type: Sequelize.TIME
    }
}, {
    timestamps:false
})

module.exports = Event