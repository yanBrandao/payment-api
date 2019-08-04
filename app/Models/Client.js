'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/**
*  @swagger
*  definitions:
*    Client:
*      type: object
*      properties:
*        name:
*          type: string
*        cnpj:
*          type: string
*/
class Client extends Model {
  transactions () {
    return this.hasMany('App/Models/Transaction')
  }
}

module.exports = Client
