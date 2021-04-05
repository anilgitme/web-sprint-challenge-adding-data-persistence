// build your `Task` model here
const db = require('../../data/dbConfig')

const getTask = async() => {
    return await db('tasks')
}

const insertTask = async(data) => {
    return await db.insert(data).into('tasks')
}

module.exports(getTask, insertTask);