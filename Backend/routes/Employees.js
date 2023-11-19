const express = require('express')
const router = express.Router()
const Employee = require('../models/Employee')

// Getting all Employees
router.get('/', async (req, res) => {
    try {
        const Employees = await Employee.find()
        res.json(Employees)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One Employee with id
router.get('/:id', getEmployee, (req, res) => {
    res.json(res.subscriber)
})

// Creating one employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        address: req.body.address,
        hire_date: req.body.hire_date,
        role: req.body.role,
        salary: req.body.salary,
        working_status: req.body.working_status,
        manager_id: req.body.manager_id,
        department_id: req.body.department_id
    })
    try {
        const newManager = await employee.save()
        res.status(201).json(newManager)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One Employee with id
router.patch('/:id', getEmployee, async (req, res) => {
    // if (req.body.name != null) {
    //     res.subscriber.name = req.body.name
    // }
    // if (req.body.subscribedToChannel != null) {
    //     res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    // }
    // logic for checking new passed employee object
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getEmployee, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getEmployee(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.subscriber = subscriber
    next()
}

module.exports = router