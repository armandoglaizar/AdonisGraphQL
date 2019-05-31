'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SurveySchema extends Schema {
  up () {
    this.create('surveys', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.json('questions').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('surveys')
  }
}

module.exports = SurveySchema
