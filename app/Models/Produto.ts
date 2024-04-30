import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Categoria from "./Categoria";

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public price: number;

  @column()
  public amount: number;

  @column()
  public description: string;

  @column()
  public active: boolean;

  @column()
  public categoria_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Categoria, { foreignKey: "categoria_id" })
  public categoria: BelongsTo<typeof Categoria>;
}
