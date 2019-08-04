'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    CreditCard:
*      type: object
*      properties:
*        name:
*          type: string
*        number:
*          type: string
*        date_validation:
*          type: date
*        cvv:
*          type: string
*/
class CreditCard extends Model {
}

module.exports = CreditCard
