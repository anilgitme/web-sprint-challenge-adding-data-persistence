exports.up = async function(knex) { //for projects
    await knex.schema.createTable('projects', (table) => {
        table.increments('project_id')
        table.string('project_name')
        table.string('project_description')
        table.boolean('project_completed').defaultTo(false)
    })
    await knex.schema.createTable('resources', (table) => { //resource table
        table.increments('resource_id')
        table.string('resource_name').unique()
        table.string('resource_description')
    })
    await knex.schema.createTable('tasks', (table) => {
        table.increments('task_id')
        table.string('task_description')
        table.string('task_notes')
        table.boolean('task_completed').defaultTo(false)
            //create foreign key for this table
        table.integer('project_id').references('project_id').inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};



exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects')
    await knex.schema.dropTableIfExists('tasks')
    await knex.schema.dropTableIfExists('resources')
};