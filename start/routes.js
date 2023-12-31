'use strict'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//Agrupación de rutas
Route.group(() => {
  Route.post('usuarios/registro', 'UserController.store')
  Route.post('usuarios/login', 'UserController.login')
  Route.get('proyectos', 'ProjectController.index').middleware('auth')
  Route.post('proyectos', 'ProjectController.create').middleware('auth')
}).prefix('api/')

// //Agrupación de rutas
// Route.group(() => {
//   Route.post('usuarios/registro', 'UserController.store')
//   Route.post('usuarios/reg', 'UserController.store')
// }).prefix('api/v2/')

