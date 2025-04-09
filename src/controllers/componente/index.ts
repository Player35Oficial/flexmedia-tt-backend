import { Request, Response } from "express";
import {
  ComponenteProvider,
  INames,
} from "../../server/database/providers/ComponenteEletronico";
import { StatusCodes } from "http-status-codes";
import { IComponenteEletronico } from "../../server/database/models/ComponenteEletronico";
import { db } from "../../server/config";
import { componentesEletronicos } from "../../server/database/seeds/local_database";

const componenteProvider = new ComponenteProvider();

class ComponenteController {
  constructor() {
    this.listComponentes = this.listComponentes.bind(this);
  }

  async seedDatabase(
    req: Request<{}, {}, {}>,
    res: Response<{ message: string }>
  ): Promise<any> {
    try {
      // Seed new data
      for (const componente of componentesEletronicos) {
        await db.collection("componentes_eletronicos").add(componente);
      }
      return res.status(StatusCodes.OK).json({ message: "Database seeded" });
    } catch (error) {
      console.error("Erro ao semear o banco de dados: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao semear o banco de dados",
      });
    }
  }

  async listComponentes(
    req: Request<{}, IComponenteEletronico[]>,
    res: Response
  ): Promise<any> {
    try {
      const componentes = await componenteProvider.getComponentes();
      return res.status(StatusCodes.OK).json(componentes);
    } catch (error) {
      console.error("Erro ao listar componentes: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao listar componentes",
      });
    }
  }

  async listComponentesNames(
    req: Request<{}, string[]>,
    res: Response<INames[] | { message: string }>
  ): Promise<any> {
    try {
      const componentes = await componenteProvider.getComponentesNames();
      return res.status(StatusCodes.OK).json(componentes);
    } catch (error) {
      console.error("Erro ao listar componentes: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao listar componentes",
      });
    }
  }

  async createComponente(
    req: Request<{}, {}, IComponenteEletronico>,
    res: Response
  ): Promise<any> {
    try {
      const { nome, tipo, especificacoes, placa_associada } = req.body;
      const id = await componenteProvider.createComponente({
        nome,
        tipo,
        especificacoes,
        placa_associada: placa_associada !== undefined ? placa_associada : "",
      });

      if (!id) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          message: "Erro ao criar componente",
        });
      }

      return res.status(StatusCodes.CREATED).json({ id });
    } catch (error) {
      console.error("Erro ao criar componente: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao criar componente",
      });
    }
  }

  async getComponenteById(
    req: Request<{ id: string }, IComponenteEletronico | undefined, {}>,
    res: Response
  ): Promise<any> {
    try {
      const { id } = req.params;
      const componente = await componenteProvider.getComponenteById(id);
      if (!componente) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Componente não encontrado pelo ID",
        });
      }
      return res.status(StatusCodes.OK).json(componente);
    } catch (error) {
      console.error("Erro ao buscar componente: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao buscar componente",
      });
    }
  }

  async deleteComponente(
    req: Request<{ id: string }, {}, {}>,
    res: Response
  ): Promise<any> {
    try {
      const { id } = req.params;
      await componenteProvider.deleteComponente(id);
      return res
        .status(StatusCodes.OK)
        .json({ message: "Componente deletado" });
    } catch (error) {
      console.error("Erro ao deletar componente: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao deletar componente",
      });
    }
  }

  async updateComponente(
    req: Request<{ id: string }, {}, IComponenteEletronico>,
    res: Response
  ): Promise<any> {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "ID do componente não fornecido",
        });
      }
      const { nome, tipo, especificacoes, placa_associada } = req.body;
      await componenteProvider.updateComponente({
        id,
        nome,
        tipo,
        especificacoes,
        placa_associada: placa_associada !== undefined ? placa_associada : "",
      });
      return res
        .status(StatusCodes.OK)
        .json({ message: "Componente atualizado" });
    } catch (error) {
      console.error("Erro ao atualizar componente: ", error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao atualizar componente",
      });
    }
  }
}

export { ComponenteController };
