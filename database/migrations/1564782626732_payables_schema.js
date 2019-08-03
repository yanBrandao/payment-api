'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PayablesSchema extends Schema {
  up () {
    this.create('payables', (table) => {
      table.increments()
      table.date('payment_date')
      table.enu('status', ['paid', 'waiting_funds'])
      table.decimal('fee')
      table.integer('transaction_id').unsigned().references('id').inTable('transactions')
      table.timestamps()
    })
  }

  down () {
    this.drop('payables')
  }
}

module.exports = PayablesSchema
