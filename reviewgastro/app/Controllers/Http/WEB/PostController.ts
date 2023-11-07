import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Post from 'App/Models/Post'
import UserServices from 'App/Services/UserServices'
import PostServices from 'App/Services/PostServices'
import CreatePostValidator from 'App/Validators/CreatePostValidator'


export default class PostsController{
    public async create({ view }: HttpContextContract) {
        return view.render('posts/create')
    }

    public async store({ request, response}: HttpContextContract) {
        const payload = await request.validate(CreatePostValidator)

        const user = await User.findOrFail(1)

        const postServices = new PostServices()
        const post = await postServices.create(user, payload)

        return response.redirect().toRoute('posts.show', { id: post.id })
    }

    public async show({ params, view }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        await post.load('user')

        return view.render('posts/show', { post: post })
    }

    public async index({ view }: HttpContextContract) {
        const posts = await Post.all()

        return view.render('posts/index', { posts: posts })
    }

    public async update({ params, view }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        return view.render('posts/update', { post: post })
    }

    public async patch({ params, request, response }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        const title = request.input('title', undefined)
        const content = request.input('content', undefined)

        post.title = title ? title : post.title
        post.content = content ? content : post.content

        await post.save()

        return response.redirect().toRoute('posts.show', { id: post.id })
    }

    public async destroy({ params, response }: HttpContextContract) {
        const post = await Post.findOrFail(params.id)

        await post.delete()

        return response.redirect().toRoute('posts.index')
    }
}