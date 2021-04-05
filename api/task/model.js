// build your `Task` model here
const db = require('../../data/dbConfig')

const getTask = async() => {
    const task = await db('tasks')
    return task;
}

const insertTask = async(data) => {
    const newTask = await db.insert(data).into('tasks')
    return newTask
}

module.exports = { getTask, insertTask };