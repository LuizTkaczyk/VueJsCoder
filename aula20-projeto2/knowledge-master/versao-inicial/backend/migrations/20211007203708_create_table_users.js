
//criando a tabela no método up!!!!!!!!!!!!!!!!!!!
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('password').notNull()
        table.boolean('admin').notNull().default(false)

    })
  
};

//criando a tabela no método down de modo oposto!!!!!!!!!!!!!!!!!!!
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
