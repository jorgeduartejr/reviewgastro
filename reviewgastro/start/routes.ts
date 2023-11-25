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
import Route from '@ioc:Adonis/Core/Route'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


Route.get('/', async ({ view }: HttpContextContract) => {
  return view.render('home/show')
}).as('home.show')

Route.get('/login', 'SessionsController.create').as('sessions.create')
Route.post('/login', 'SessionsController.store').as('sessions.store')
Route.get('/logout', 'SessionsController.delete').as('sessions.delete')





Route.group(() => {
  Route.group(() => {
    Route.get('/', 'PostController.index').as('index')
    Route.get('/new', 'PostController.create').as('create')
    Route.post('/', 'PostController.store').as('store')
    Route.get('/:id/update', 'PostController.update').as('update')
    Route.patch('/:id', 'PostController.patch').as('patch')
    Route.get('/:id', 'PostController.show').as('show')
  })
    .prefix('/posts')
    .as('posts')
    // .middleware('auth')


  Route.group(() => {
    Route.get('/', 'UsersController.index').as('index')
    Route.get('/new', 'UsersController.create').as('create')
    Route.post('/', 'UsersController.store').as('store')
    Route.get('/:id/update', 'UsersController.update').as('update')
    Route.patch('/:id', 'UsersController.patch').as('patch')
    Route.get('/:id', 'UsersController.show').as('show')
  })
    .prefix('/users')
    .as('users')
}).namespace('App/Controllers/Http/WEB')
  
  


// Route.group(() => {
//   // Route.get('/', async ({ view }) => {
//   //   return view.render('welcome')
//   // })
//   //Route.resource('/users', 'UsersController').apiOnly()
//   Route.post('/users', 'UsersController.store').as('users.store')
//   Route.get('/users', 'UsersController.index').as('users.index')
//   Route.get('/users/:id', 'UsersController.show').as('users.show')
//   Route.delete('/users/:id', 'UsersController.destroy').as('users.destroy')
//   Route.patch('/users/:id', 'UsersController.update').as('users.update')




//   Route.post('/users/:postId/posts', 'PostsController.store').as('posts.store')
//   Route.get('/users/:userId/posts', 'PostsController.index').as('posts.index')
//   Route.get('/users/:userId/posts/:id', 'PostsController.show').as('posts.show')
//   Route.delete('/users/:userId/posts/:id', 'PostsController.destroy').as('posts.destroy')
//   Route.patch('/users/:userId/posts/:id', 'PostsController.update').as('posts.update')

// }).prefix('/api')


// Route.group(() => {
//   Route.get('/', async ({ view }) => {
//     return view.render('welcome')
//   })
//   //Route.resource('/users', 'UsersController').apiOnly()
  
  
// }).prefix('/api/posts')

// Route.group(() => {
//   Route.get('/', 'DocumentsController.index').as('index')
//   Route.get('/create', 'DocumentsController.create').as('create')
//   Route.get('/:id', 'DocumentsController.show').as('show')
// })
//   .prefix('/documents')
//   .as('documents')





