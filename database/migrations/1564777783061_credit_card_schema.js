'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreditCardSchema extends Schema {
  up () {
    this.create('credit_cards', (table) => {
      table.increments()
      table.string('name')
      table.string('number').unique()
      table.date('date_validation')
      table.string('cvv')
      table.timestamps()
    })
  }

  down () {
    this.drop('credit_cards')
  }
}

module.exports = CreditCardSchema
