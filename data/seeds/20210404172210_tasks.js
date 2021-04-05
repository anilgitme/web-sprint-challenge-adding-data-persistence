exports.seed = async function(knex) {
    await knex('tasks').insert([
        { task_description: 'climb mount everest', tasks_notes: 'buy some climbing gears', task_completed: 'false', project_id: 0 },
        { task_description: 'ocean fishing', tasks_notes: 'schedule a trip', task_completed: 'false', project_id: 1 },
        { task_description: 'buy a house', tasks_notes: 'save some money', task_completed: 'false', project_id: 2 },
        { task_description: 'visit japan', tasks_notes: 'get some vacation time', task_completed: 'false', project_id: 3 },
    ])
}