const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')
const Departmentservice = require('../models/Department').DepartmentService

// Getting all Employees
router.get('/', async (req, res) => {
    try {
        const Employees = await Employee.find()
        res.json(Employees)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Creating one employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password:req.body.password,
        phone_number: req.body.phone_number,
        address: req.body.address,
        hire_date: req.body.hire_date,
        role: req.body.role,
        salary: req.body.salary,
        working_status: req.body.working_status,
        manager_id: req.body.manager_id,
        empid:req.body.empid
    })
    try {
        const newManager = await employee.save()
        res.status(201).json(newManager)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


// finding employee
router.post('/employee', async (req, res) => {
    const data = {
        email: req.body.email,
        password:req.body.password,
    }
    try {
        const Employees = await Employee.find( data );
        console.log(Employees);
        res.status(201).json(Employees[0])
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router