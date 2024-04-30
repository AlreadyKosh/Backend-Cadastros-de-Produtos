import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Categorias extends BaseSchema {
  protected tableName = "categorias";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name_class");
      table.string("description_class");
      table.boolean("active_class");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
