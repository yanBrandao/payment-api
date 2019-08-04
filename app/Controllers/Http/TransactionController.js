'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Transaction = use('App/Models/Transaction');
const Client = use('App/Models/Client');
const CreditCard = use('App/Models/CreditCard');

/**
 * Resourceful controller for interacting with transactions
 */
class TransactionController {
  /**
   * Show a list of all transactions.
   * GET transactions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new transaction.
   * GET transactions/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

 /**
  * @swagger
  * /api/transactions/:
  *   post:
  *     tags:
  *       - Transaction
  *     summary: Create a new transaction
  *     parameters:
  *       - name: transaction
  *         in: body
  *         description: Transaction object
  *         required: true
  *         schema:
  *           $ref: '#definitions/Transaction'
  *     responses:
  *       200:
  *         description: Create sucessfull
  *         example:
  *           $ref: '#definitions/Transaction'
  */
 async store ({ request, response }) {

  const card = new CreditCard()
  const client = new Client()
  if(!this.existCard(request.input('number'))){
    card.name = request.input('name')
    card.number = request.input('number')
    card.date_validation = request.input('date_validation')
    card.cvv = request.input('cvv')
    await card.save()
  }

  if(!this.existClient(request.input('cnpj'))){
    client.name = request.input('name')
    client.cnpj = request.cnpj('cnpj')
    await client.save()
  }

  console.log(card)
  console.log(client)

  const transaction = new Transaction()
  transaction.value = request.input('value')
  transaction.description = request.input('description')
  transaction.payment_method = request.input('payment_method')
  transaction.credit_card_id = card.id;
  transaction.client_id = client.id;

  await transaction.save()
  return response.json(transaction)
}

existCard(card_number){
  return CreditCard.find('number', card_number)
}

existClient(client_cnpj){
  return Client.find('cnpj', client_cnpj)
}

  /**
   * Display a single transaction.
   * GET transactions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing transaction.
   * GET transactions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update transaction details.
   * PUT or PATCH transactions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a transaction with id.
   * DELETE transactions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TransactionController
