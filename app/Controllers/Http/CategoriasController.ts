import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Categoria from "App/Models/Categoria";

export default class CategoriasController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body();

    const categoria = await Categoria.create(body);

    response.status(201);

    return {
      message: "Categoria criada com sucesso!!",
      data: categoria,
    };
  }

  public async index() {
    const categorias = await Categoria.all();

    return {
      data: categorias,
    };
  }

  public async show({ params }: HttpContextContract) {
    const categoria = await Categoria.findOrFail(params.id);

    return {
      data: categoria,
    };
  }

  public async destroy({ params }: HttpContextContract) {
    const categoria = await Categoria.findOrFail(params.id);

    await categoria.delete();

    return {
      message: "Categoria Excluida com Sucesso!!",
      data: categoria,
    };
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body();

    const categoria = await Categoria.findOrFail(params.id);

    categoria.name_class = body.name_class;
    categoria.description_class = body.description_class;
    categoria.active_class = body.active_class;

    await categoria.save();

    return {
      message: "Categoria Atualizado com Sucesso!!",
      data: categoria,
    };
  }
}
