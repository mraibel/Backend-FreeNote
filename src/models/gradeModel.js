const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')

const Grade = sequelize.define('grade', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    value:{
        type: Sequelize.INTEGER
    },
    description:{
        type: Sequelize.TEXT
    },
    percentage:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
}, {
    timestamps:false
})

module.exports = Grade