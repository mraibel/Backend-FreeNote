const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')


const Semester = sequelize.define('semester', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps:false
})

module.exports = Semester