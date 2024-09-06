const Sequelize = require('sequelize')
const sequelize = require('../database/database.js')


const Student = sequelize.define('student', {
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
    lastName:{
        type: Sequelize.TEXT,
        allowNull: false 
    },
    email:{
        type: Sequelize.TEXT,
        allowNull: false 
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    timestamps:false
})

module.exports = Student