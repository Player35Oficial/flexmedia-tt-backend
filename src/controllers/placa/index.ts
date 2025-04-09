import { Request, Response } from "express";
import { PlacaEletronicaProvider } from "../../server/database/providers/PlacaEletronica";
import { StatusCodes } from "http-status-codes";
import {
  IPlacaEletronica,
  IPlacaEletronicaCreate,
  IPlacaEletronicaUpdate,
} from "../../server/database/models/PlacaEletronica";

const placaProvider = new PlacaEletronicaProvider();

class PlacaEletronicaController {
  async listPlacas(
    req: Request<{}, {}, IPlacaEletronica[]>,
    res: Response
  ): Promise<any> {
    try {
      const placas = await placaProvider.getPlacas();
      return res.status(StatusCodes.OK).json(placas);
    } catch (error) {
      console.error("Erro ao listar placas: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao listar placas",
      });
    }
  }

  async getPlacaById(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<any> {
    try {
      const { id } = req.params;
      const placa = await placaProvider.getPlacaById(id);
      if (!placa) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Placa não encontrada",
        });
      }
      return res.status(StatusCodes.OK).json(placa);
    } catch (error) {
      console.error("Erro ao buscar placa: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao buscar placa",
      });
    }
  }

  async createPlaca(
    req: Request<{}, {}, IPlacaEletronicaCreate>,
    res: Response
  ): Promise<any> {
    try {
      const id = await placaProvider.createPlaca(req.body);
      return res.status(StatusCodes.CREATED).json({ id });
    } catch (error) {
      console.error("Erro ao criar placa: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao criar placa",
      });
    }
  }

  async updatePlaca(
    req: Request<{ id: string }, {}, IPlacaEletronicaUpdate>,
    res: Response
  ): Promise<any> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "ID não fornecido",
        });
      }
      const { nome, descricao, componentes_associados } = req.body;

      await placaProvider.updatePlaca({
        id,
        nome,
        descricao,
        componentes_associados,
      });
      return res.status(StatusCodes.OK).json({ message: "Placa atualizada" });
    } catch (error) {
      console.error("Erro ao atualizar placa: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao atualizar placa",
      });
    }
  }

  async deletePlaca(req: Request<{ id: string }>, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      await placaProvider.deletePlaca(id);
      return res.status(StatusCodes.OK).json({ message: "Placa deletada" });
    } catch (error) {
      console.error("Erro ao deletar placa: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao deletar placa",
      });
    }
  }
}

export { PlacaEletronicaController };
