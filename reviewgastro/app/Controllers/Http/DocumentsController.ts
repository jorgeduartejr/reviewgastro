import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DocumentsController {
    public async index({ view }: HttpContextContract) {
        return view.render('documents/index')
    }
    public async show({ view }: HttpContextContract) {
        return view.render('documents/show')
    }
    public async create({ view }: HttpContextContract) 
    {
        return view.render('documents/create')
    }
}
