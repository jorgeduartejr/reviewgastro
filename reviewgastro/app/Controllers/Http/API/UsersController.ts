import {v4 as uuidv4} from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

import Application from '@ioc:Adonis/Core/Application'


export default class UsersController {
    private validationOptions = {
        types: ['image'],	
        size: '2mb',
    }
    public async store({request, response}: HttpContextContract){

        //const email = request.input("email")
        //const password = request.input("password")

        //const user = await User.create({email, password})

        const body = request.body()
        

        const image = request.file('image',this.validationOptions)

        if(image){
            const imageName = `${uuidv4()}.${image.extname}`
            await image.move(Application.tmpPath('uploads'),{
                name: imageName,
            })
            body.image = imageName
        }
        const user = await User.create(body)

        response.status(201)
        return {
            message: 'User created successfully',
            data: user,
        }
    }

    public async index(){
        const users = await User.all()
        
        return {
            message: 'All users',
            data: users,
        }
    }

    public async show({params, response}: HttpContextContract){
        const user = await User.findOrFail(params.id)

        return {
            message: 'User found',
            data: user,
        }
    }

    public async destroy({params, response}: HttpContextContract){
        const user = await User.findOrFail(params.id)

        await user.delete()

        return {
            message: 'User deleted successfully',
            data: user,
        }
    }

    public async update({params, request}: HttpContextContract){
        const body = request.body()
        
        const user = await User.findOrFail(params.id)

        user.email = body.email
        user.password = body.password

        if(user.image != body.image || !user.image){
            const image = request.file('image',this.validationOptions)

            if (image){
                const imageName = `${uuidv4()}.${image.extname}`

                await image.move(Application.tmpPath('uploads'),{
                    name: imageName,
                })
                
                user.image = imageName
            }
        }

        await user.save()

        return {
            message: 'User updated successfully',
            data: user,
        }
    }
}
