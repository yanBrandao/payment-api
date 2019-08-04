'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


/**
*  @swagger
*  definitions:
*    Payable:
*      type: object
*      properties:
*        status:
*          type: string
*        fee:
*          type: number
*          format: double
*        transaction:
*           $ref: '#definitions/Transaction'
*/
class Payable extends Model {
  transaction () {
    return this.belongsTo('App/Models/Transaction')
  }
}

module.exports = Payable
