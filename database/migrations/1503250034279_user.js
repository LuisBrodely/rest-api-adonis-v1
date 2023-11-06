'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  // El metodo up se ejecuta cuando se ejecute la migración
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  // Se ejecuta cuando se elimine la tabla usuarios 
  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
