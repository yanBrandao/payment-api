'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    Transaction:
*      type: object
*      properties:
*        value:
*          type: number
*          format: double
*        description:
*          type: string
*        payment_method:
*          type: string
*        credit_card:
*            $ref: '#definitions/CreditCard'
*        client:
*            $ref: '#definitions/Client'
*/
class Transaction extends Model {
  payable () {
    return this.hasOne('App/Models/Payable')
  }
  client () {
    return this.hasOne('App/Models/Client')
  }
}

module.exports = Transaction
