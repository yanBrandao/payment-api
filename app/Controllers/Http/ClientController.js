'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Client = use('App/Models/Client');

/**
 * Resourceful controller for interacting with clients
 */
class ClientController {

  async index ({ request, response, view }) {
    const clients = await Client.all();
    return clients;
  }

  async create ({ request, response, view }) {
  }

/**
  * @swagger
  * /api/clients/:
  *   post:
  *     tags:
  *       - Client
  *     summary: Create a client
  *     parameters:
  *       - name: client
  *         in: body
  *         description: Client object
  *         required: true
  *         schema:
  *           $ref: '#definitions/Client'
  *     responses:
  *       200:
  *         description: Create sucessfull
  *         example:
  *           - $ref: '#definitions/Client'
  */
  async store ({ request, response }) {
    const data = request.only(['name', 'cnpj'])
    const client = new Client()
    client.name = data['name']
    client.cnpj = data['cnpj']

    await client.save()
    return response.json(client)
  }

  /**
  * @swagger
  * /api/clients/payables:
  *   get:
  *     tags:
  *       - Client
  *     summary: list of all payables
  *     parameters:
  *       - name: client_id
  *         description: Client id for return the payables
  *         in: query
  *         required: true
  *         type: number
  *     responses:
  *       200:
  *         description: list of all payables
  *         example:
  *           message: []
  */
  async payables({request, response}) {
      const client = await Client.find(request.input('client_id'))
      return await client.transactions().fetch()
  }

  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = ClientController
