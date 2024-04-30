import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Produtos extends BaseSchema {
  protected tableName = "produtos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name");
      table.decimal("price");
      table.integer("amount");
      table.string("description");
      table.boolean("active");
      table
        .integer("categoria_id")
        .unsigned()
        .references("categorias.id")
        .onDelete("CASCADE");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
