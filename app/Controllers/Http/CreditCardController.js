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
  * /api/credit_cards:
  *   get:
  *     tags:
  *       - CreditCard
  *     summary: List all credit cards
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
  * /api/credit_cards/:
  *   post:
  *     tags:
  *       - CreditCard
  *     summary: Create a credit card
  *     parameters:
  *       - name: creditcard
  *         in: body
  *         description: Credit Card object
  *         required: true
  *         schema:
  *           $ref: '#definitions/CreditCard'
  *     responses:
  *       200:
  *         description: Create sucessfull
  *         example:
  *           $ref: '#definitions/CreditCard'
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
