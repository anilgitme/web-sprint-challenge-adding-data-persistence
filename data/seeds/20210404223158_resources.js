exports.seed = async function(knex) {
    await knex('resources').insert([
        { resource_name: 'climb everest', resource_description: 'buy gears' },
        { resource_name: 'fishing', resource_description: 'go on a trip' },
        { resource_name: 'get house', resource_description: 'save money' },
        { resource_name: 'japan', resource_description: 'vacation time' },
    ])
}