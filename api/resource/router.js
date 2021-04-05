// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model')
const router = express.Router();

//get request from resource
router.get('/', async(req, res, next) => {
    try {
        const data = await Resource.getAll();
        res.status(201).json(data)
    } catch (err) {
        next(err)
    }
})

//post resource

router.post('/', async(req, res, next) => {
    try {
        const newSource = await Resource.insert(req.body)
        res.status(201).json(newSource)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: 'something went wrong inside the resource router',
        errMessage: err.message,
    })
})

module.exports = router;