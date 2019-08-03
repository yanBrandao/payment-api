'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionSchema extends Schema {
  up () {
    this.create('transactions', (table) => {
      table.increments()
      table.decimal('value', 14, 2)
      table.string('description')
      table.enu('payment_method', ['debit_card', 'credit_card'])
      table.integer('credit_card_id').unsigned().references('id').inTable('credit_cards')
      table.integer('client_id').unsigned().references('id').inTable('clients')
      table.timestamps()
    })
  }

  down () {
    this.drop('transactions')
  }
}

module.exports = TransactionSchema
