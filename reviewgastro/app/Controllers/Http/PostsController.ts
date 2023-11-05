import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import User from 'App/Models/User'


export default class PostsController {
    public async store({request, response, params}: HttpContextContract){
        const body = request.body()
        //const userId = params.userId
        const userId = params.userId
        //const userId = 1

        //await User.findOrFail(userId)

        body.userId = userId

        const post = await Post.create(body)

        response.status(201)

        return {
            message: 'Post created successfully',
            data: post,
        }

        // const title = request.input('title', undefined)
        // const content = request.input('content', undefined)
        // const userId = request.input('userId', undefined)

        // if(!title || !content || !userId){
        //     response.status(400)
        //     return {
        //         message: 'Missing required data',
        //         data: undefined,
        //     }
        // }

        // const post = await Post.create({title, content, userId})

        // response.status(201)

        // return {
        //     message: 'Post created successfully',
        //     data: post,
        // }
    }

    public async index({}: HttpContextContract){
        const posts = await Post.all()

        return {
            message: 'List of posts',
            data: posts,
        }
    }

    public async destroy({params, response}: HttpContextContract){
        const post = await Post.findOrFail(params.id)
        await post.delete()

        response.status(204)
        return null
    }

    public async update({request, params, response}: HttpContextContract){
        const post = await Post.findOrFail(params.id)

        const title = request.input('title', undefined)
        const content = request.input('content', undefined)
        const image = request.input('image', undefined)

        post.title = title ? title : post.title
        post.content = content ? content : post.content

        await post.save()

        response.status(200)
        return {
            message: 'Post updated successfully',
            data: post,
        }
    }


    public async show({params, response}: HttpContextContract){
        const post = await Post.findOrFail(params.id)

        response.status(200)
        return {
            message: 'Post retrieved successfully',
            data: post,
        }
    }

}
