exports.seed = async function(knex) {
    await knex('projects').insert([
        { project_name: 'climb mount everest', project_description: 'reach the peak of mount everest', project_completed: false, project_id: 0 },
        { project_name: 'ocean fishing', project_description: 'go out in the pacific and fishing', project_completed: false, project_id: 1 },
        { project_name: 'buy a house', project_description: 'get your own house', project_completed: false, project_id: 2 },
        { project_name: 'visit japan', project_description: 'take a trip to japan', project_completed: false, project_id: 3 },
    ])
}