import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserServices from 'App/Services/UserServices'

export default class UsersController {
  public async create({ view }: HttpContextContract) {
    return view.render('users/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const email = request.input('email', undefined)
    const password = request.input('password', undefined)

    if (!email || !password) {
      return response.badRequest('Invalid email or password')
    }

    const userServices = new UserServices()
    const user = await userServices.create(email, password)

    return response.redirect().toRoute('users.show', { id: user.id })
  }

  public async update({ parans, view }: HttpContextContract) {
    const user = await User.findOrFail(parans.id)

    return view.render('users/update', { user: user })
  }

  public async patch({ request, response, parans }: HttpContextContract) {
    const user = await User.findOrFail(parans.id)

    const email = request.input('email', undefined)
    const password = request.input('password', undefined)

    user.email = email ? email : user.email
    user.password = password ? password : user.password

    await user.save()

    return response.redirect().toRoute('users.show', { id: user.id })
  }
  public async index({ view }: HttpContextContract) {
    const users = await User.all()

    return view.render('users/index', { users: users })
  }

  public async destroy({ parans, response }: HttpContextContract) {
    const user = await User.findOrFail(parans.id)

    await user.delete()

    return response.redirect().toRoute('users.index')
  }

  public async show({ parans, view }: HttpContextContract) {
    const user = await User.findOrFail(parans.id)

    return view.render('users/show', { user: user })
  }
}
