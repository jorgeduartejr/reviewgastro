import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateAuthValidator from 'App/Validators/CreateAuthValidator'


export default class AuthController {
    public async create({ view }: HttpContextContract) {
        return view.render('auth/create')
    }

    public async store({ auth, request, response,session }: HttpContextContract) {
        const payload = await request.validate(CreateAuthValidator)

        try {
            await auth.attempt(payload.email, payload.password)
            return response.redirect().toRoute('home.show')
        } catch{
            session.flashOnly(['email'])
            session.flash({erros: {login: 'Email ou senha incorretos'}})

            return response.redirect().toRoute('auth.create')
        }
    }

    public async destroy({ auth, response }: HttpContextContract) {
        await auth.use('web').logout()

        return response.redirect().toRoute('auth.create')
    }
}
