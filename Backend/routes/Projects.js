const express = require('express')
const router = express.Router()
const Project = require('../models/Project')

// Getting all Projects
router.get('/', async (req, res) => {
    try {
        const Projects = await Project.find()
        res.json(Projects)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Creating one Project
router.post('/', async (req, res) => {
    const project = new Project({
        project_name:req.body.project_name,
        project_description:req.body.project_description,
        project_manager:req.body.project_manager,
        total_story_points:req.body.total_story_points,
        completed_story_points:req.body.completed_story_points,
        project_status:req.body.project_status,
        start_date:req.body.start_date,
        end_date:req.body.end_date
    })
    try {
        const newManager = await project.save()
        res.status(201).json(newManager)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }  
})
module.exports = router