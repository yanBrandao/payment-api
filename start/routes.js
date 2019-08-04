'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.put('/api/credit_cards/:id', 'CreditCardController.update')
Route.delete('/api/credit_cards/id', 'CreditCardController.destroy')
Route.post('/api/credit_cards', 'CreditCardController.store')
Route.get('/api/credit_cards', 'CreditCardController.index')
Route.get('/api/clients/payables', 'ClientController.payables')
Route.get('/api/clients', 'ClientController.index')
Route.post('/api/clients', 'ClientController.store')
Route.post('/api/transactions', 'TransactionController.store')




