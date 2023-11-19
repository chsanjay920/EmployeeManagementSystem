const express = require('express')
const router = express.Router()
const Leaves = require('../models/Leave')

// Getting all leaves
router.get('/', async (req, res) => {
    try {
        const LeavesList = await Leaves.aggregate([
            {
                $lookup: {
                    from: 'employees', // collection name in the database
                    localField: 'empid',
                    foreignField: 'empid',
                    as: 'employeeDetails',
                },
            },
            {
                $unwind: '$employeeDetails',
            },
            {
                $project: {
                    _id: 0,
                    leave_id: '$_id',
                    empid: 1,
                    leave_type: 1,
                    start_date: 1,
                    end_date: 1,
                    reason: 1,
                    status: 1,
                    employee_name: {
                        $concat: ['$employeeDetails.first_name', ' ', '$employeeDetails.last_name'],
                    },
                },
            },
        ]);

        res.json(LeavesList)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Creating one Project
router.post('/', async (req, res) => {
    const leave = new Leaves({
        empid: req.body.empid,
        leave_type: req.body.leave_type,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        reason: req.body.reason,
        status: req.body.status
    })
    try {
        const newleave = await leave.save()
        res.status(201).json(newleave)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.get('/:empid', getLeaves, (req, res) => {
    res.json(res.leaves)
})

async function getLeaves(req, res, next) {
    let leaves
    try {
        leaves = await Leaves.find({ employee_id: req.params.empid })
        if (leaves == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.leaves = leaves
    next()
}

async function getEmpName(empid) {
    let emp
    try {
        emp = await Employee.find({ employee_id: empid })
        if (emp == null) {
            return res.status(404).json({ message: 'Cannot find employee' })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
    console.log(emp);
    return emp;
}




module.exports = router