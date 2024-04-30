import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Produto from "App/Models/Produto";

export default class ProdutosController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body();

    const produto = await Produto.create(body);

    response.status(201);

    return {
      message: "Produto criado com sucesso!!",
      data: produto,
    };
  }

  public async index() {
    const produtos = await Produto.all();

    return {
      data: produtos,
    };
  }

  public async show({ params }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id);

    return {
      data: produto,
    };
  }

  public async destroy({ params }: HttpContextContract) {
    const produto = await Produto.findOrFail(params.id);

    await produto.delete();

    return {
      message: "Produto Excluido com Sucesso!!",
      data: produto,
    };
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body();

    const produto = await Produto.findOrFail(params.id);

    produto.name = body.name;
    produto.price = body.price;
    produto.amount = body.amount;
    produto.description = body.description;
    produto.active = body.active;
    produto.categoria_id = body.categoria_id;

    await produto.save();

    return {
      message: "Produto Atualizado com Sucesso!!",
      data: produto,
    };
  }

  public async indexByCategory({ params }: HttpContextContract) {
    const produtos = await Produto.query()
      .where("categoria_id", params.id)
      .exec();

    return {
      data: produtos,
    };
  }
}
