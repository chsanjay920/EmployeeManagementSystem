const express = require('express')
const router = express.Router()
const Leaves = require('../models/Leave')
const Employee = require('../models/Employee')

// Getting all Projects
router.get('/', async (req, res) => {
    try {
        var list;
        const leaves = await Leaves.find()
        leaves.forEach(async element => {
            var empname = await getEmpName(element.employee_id);
            list = {...element,"employee_name":empname}
        });
        res.json(list)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Creating one Project
router.post('/', async (req, res) => {
    const leave = new Leaves({
        employee_id:"655323dd28cd90133808433f",
        leave_type:req.body.leave_type,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        reason:req.body.reason,
        status:req.body.status
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
        leaves = await Leaves.find({employee_id:req.params.empid})
        if (leaves == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.leaves = leaves
    next()
}

async function getEmpName(empid)
{
    let emp
    try{
        emp = await Employee.find({employee_id:empid})
        if (emp == null) {
            return res.status(404).json({ message: 'Cannot find employee' })
        }
    }
    catch (err)
    {
        return res.status(500).json({ message: err.message })
    }
    console.log(emp);
    return emp;
}




module.exports = router