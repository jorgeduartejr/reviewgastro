/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import UsersController from 'App/Controllers/Http/UsersController'
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async ({ view }) => {
    return view.render('welcome')
  })
  //Route.resource('/users', 'UsersController').apiOnly()
  Route.post('/users', 'UsersController.store').as('users.store')
  Route.get('/users', 'UsersController.index').as('users.index')
  Route.get('/users/:id', 'UsersController.show').as('users.show')
  Route.delete('/users/:id', 'UsersController.destroy').as('users.destroy')
  Route.patch('/users/:id', 'UsersController.update').as('users.update')




  Route.post('/users/:postId/posts', 'PostsController.store').as('posts.store')
  Route.get('/users/:userId/posts', 'PostsController.index').as('posts.index')
  Route.get('/users/:userId/posts/:id', 'PostsController.show').as('posts.show')
  Route.delete('/users/:userId/posts/:id', 'PostsController.destroy').as('posts.destroy')
  Route.patch('/users/:userId/posts/:id', 'PostsController.update').as('posts.update')

}).prefix('/api')


// Route.group(() => {
//   Route.get('/', async ({ view }) => {
//     return view.render('welcome')
//   })
//   //Route.resource('/users', 'UsersController').apiOnly()
  
  
// }).prefix('/api/posts')
  


