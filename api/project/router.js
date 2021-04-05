// build your `/api/projects` router here
const express = require('express');
const router = express.Router();
const Project = require('./model');

//get projects
router.get('/', async(req, res, next) => {
    try {
        const data = await Project.getAll();
        res.status(201).json(data)
    } catch (err) {
        next(err)
    }
})

//post new porject
router.post('/', async(req, res, next) => {
    try {
        const newProj = await Project.insert(req.body)
        res.status(201).json(newProj)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: 'something went wrong inside the projects router',
        errMessage: err.message,
    })
})

module.exports = router;