import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description');
    table.text('status').notNullable();
    table.text('priority').notNullable();
    table.datetime('startDate').notNullable();
    table.datetime('dueDate').notNullable();
    table.datetime('createdAt').notNullable();
    table.datetime('updatedAt').notNullable();    
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tasks');
}
