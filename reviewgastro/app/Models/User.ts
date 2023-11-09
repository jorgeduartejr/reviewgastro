import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, hasMany,HasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @hasMany(() => Post)
  public posts: HasMany<typeof Post>
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User){
    if(user.$dirty.password){
      user.password = await Hash.make(user.password)
    }
  }
}
