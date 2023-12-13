import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Post from 'App/Models/Post'
//const Post = use('App/Models/Post');
import UserServices from 'App/Services/UserServices'
import PostServices from 'App/Services/PostServices'
import CreatePostValidator from 'App/Validators/CreatePostValidator'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import { QueryContract } from '@ioc:Adonis/Lucid/Orm';

export default class PostsController {

  public async welcomeController({ view }: HttpContextContract) {

    const posts = await Post.query().orderBy('created_at', 'desc').limit(10).fetch();
    return view.render('welcome', { posts });
  }

  public async create({ view }: HttpContextContract) {
    return view.render('posts/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['title', 'content', 'user_id'])
    const post = await Post.create(data)
    // const image = request.file('image', {
    //   size: '2mb',
    //   extnames: ['jpg', 'png', 'jpeg'],
    // })
    // if image() {
    //   await image.move(Application.publicPath('uploads'), {
    //     name: `${new Date().getTime()}.${image.extname}`,
    //   })
    //   post.image = image.fileName
    //   await post.save()
    // }

    return response.redirect().toRoute('posts.index', { id: post.id })

    // const payload = await request.validate(CreatePostValidator)

    // const user = await User.findOrFail(1)

    // const postServices = new PostServices()
    // const post = await postServices.create(user, payload)

    // return response.redirect().toRoute('posts.show', { id: post.id })
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

  public async userPosts({ auth, view }) {
    try {
      // Obtém o usuário autenticado
      const user = auth.user;

      // Obtém todos os posts do usuário ordenados por data de criação
      const posts = await Post.query().where('user_id', user.id).orderBy('created_at', 'desc').fetch();

      // Renderiza a visão com os posts
      return view.render('posts/userPosts', { posts: posts.toJSON() });
    } catch (error) {
      // Em caso de erro, renderiza a visão de erro
      console.error(error);
      return view.render('error', { error: 'Erro ao recuperar os posts do usuário.' });
    }
  }
}
