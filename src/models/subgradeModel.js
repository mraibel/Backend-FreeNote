const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')


const SubGrade = sequelize.define('subgrade', {
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
        type: Sequelize.INTEGER
    }
}, {
    timestamps:false
})

module.exports = SubGrade