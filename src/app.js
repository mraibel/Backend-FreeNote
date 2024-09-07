const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import Models
const Event = require('./models/eventModel')
const Grade = require('./models/gradeModel')
const Semester = require('./models/semesterModel')
const Student = require('./models/studentModel')
const Subgrade = require('./models/subgradeModel')
const Subject = require('./models/subjectModel')

// Associations

Grade.hasMany(Subgrade, { foreignKey:'id_grade' })

Subject.hasMany(Grade, { foreignKey:'id_subject' })

Semester.hasMany(Subject, { foreignKey:'id_semester' })

Student.hasMany(Semester, { foreignKey:'id_student' })

Student.hasMany(Event, { foreignKey:'id_student' })

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Import Routes
const semesterRoute = require('./routes/semesterRoutes')
const subjectRoute = require('./routes/subjectRoutes')

const allDataRoute = require('./routes/allDateRoutes')

// Routes

app.use('/api/semester', semesterRoute)
app.use('/api/subject', subjectRoute)

app.use('/api/allData', allDataRoute)

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada')
})

module.exports = app