import { DateTime } from 'luxon'
import { BaseModel, BelongsTo,belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'


export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public content: string

  @column()
  public title: string

  @column()
  public image: string

  @column()
  public userId: number

  @column()
  public likes: number

  @column()
  public dislikes: number

  @column()
  public saves: number

  @column()
  public favorites: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
