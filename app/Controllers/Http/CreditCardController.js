'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CreditCard = use('App/Models/CreditCard');

/**
 * Resourceful controller for interacting with creditcards
 */
class CreditCardController {

  /**
  * @swagger
  * /api/hello:
  *   get:
  *     tags:
  *       - Test
  *     summary: Sample API
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  */
 async hello({ request, response }) {
  const name = request.input('name', 'Guess')
  response.send({ message: 'Hello ' + name })
}

  /**
  * @swagger
  * /api/credit_cards:
  *   get:
  *     tags:
  *       - CreditCard
  *     summary: Credit Card endpoints
  *     responses:
  *       200:
  *         description: List all credit cards
  *         example:
  *           message: []
  */
  async index ({ request, response, view }) {
    let cards = await CreditCard.query().fetch()
    return response.json(cards)
  }

  /**
   * Render a form to be used for creating a new creditcard.
   * GET creditcards/create
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
  * /api/credit_cards:
  *   post:
  *     tags:
  *       - CreditCard
  *     summary: List all credit cards
  *     parameters:
  *       - name: name
  *         description: Name of credit card user
  *         in: query
  *         required: true
  *         type: string
  *       - name: number
  *         description: Credit card number
  *         in: query
  *         required: true
  *         type: string
  *       - name: date_validation
  *         description: Validation date
  *         in: query
  *         required: true
  *         type: date
  *       - name: cvv
  *         description: Autentication code
  *         in: query
  *         required: true
  *         type: string
  *     responses:
  *       200:
  *         description: OK
  *         example:
  *           message: []
  */
  async store ({ request, response }) {

    const name = request.input('name')
    const number = request.input('number')
    const date_validation = request.input('date_validation')
    const cvv = request.input('cvv')

    const card = new CreditCard()
    card.name = name
    card.number = number
    card.date_validation = date_validation
    card.cvv = cvv

    await card.save()
    return response.json(card)
  }

  /**
   * Display a single creditcard.
   * GET creditcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let cards = await CreditCard.query().fetch()
    return response.json(cards)
  }

  /**
   * Render a form to update an existing creditcard.
   * GET creditcards/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update creditcard details.
   * PUT or PATCH creditcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a creditcard with id.
   * DELETE creditcards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CreditCardController
