const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
const departmentRouter = require('./routes/Departments')
const employeeRouter = require('./routes/Employees')
const projectRouter = require('./routes/Projects')
const leavesRouter = require('./routes/Leaves')


const cors = require('cors');

app.use(cors());


app.use('/subscribers', subscribersRouter)
app.use('/departments',departmentRouter)
app.use('/employees',employeeRouter)
app.use('/projects',projectRouter)
app.use('/leaves',leavesRouter)


app.listen(3000, () => console.log('Server Started'))