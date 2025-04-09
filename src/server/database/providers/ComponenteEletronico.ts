import { db } from "../../config";
import {
  IComponenteEletronico,
  IComponenteEletronicoCreate,
  IComponenteEletronicoUpdate,
} from "../models/ComponenteEletronico";

const COMPONENTES_ELETRONICOS_COLLECTION = db.collection(
  "componentes_eletronicos"
);

export type INames = {
  nome: string;
};

export class ComponenteProvider {
  async getComponentes(): Promise<IComponenteEletronico[]> {
    const snapshot = await COMPONENTES_ELETRONICOS_COLLECTION.get();
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      } as IComponenteEletronico;
    });
  }

  async getComponentesNames(): Promise<INames[]> {
    const snapshot = await COMPONENTES_ELETRONICOS_COLLECTION.get();
    return snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        nome: data.nome,
      } as INames;
    });
  }

  async getComponenteById(
    id: string
  ): Promise<IComponenteEletronico | undefined> {
    try {
      const doc = await COMPONENTES_ELETRONICOS_COLLECTION.doc(id).get();
      if (doc.exists) {
        const data = doc.data();
        if (!data) return;
        return {
          id: doc.id,
          nome: data.nome,
          tipo: data.tipo,
          especificacoes: data.especificacoes,
          placa_associada: data.placa_associada,
        } as IComponenteEletronico;
      }
    } catch (error) {
      console.error("Error fetching componente: ", error);
      return;
    }
  }

  async createComponente(data: IComponenteEletronicoCreate) {
    try {
      const res = await COMPONENTES_ELETRONICOS_COLLECTION.add(data);
      if (res.id) {
        return res.id;
      }
    } catch (error) {
      console.error("Error creating componente: ", error);
      return;
    }
  }

  async deleteComponente(id: string) {
    try {
      await COMPONENTES_ELETRONICOS_COLLECTION.doc(id).delete();
      return;
    } catch (error) {
      console.error("Error deleting componente: ", error);
      return;
    }
  }

  async updateComponente(data: IComponenteEletronicoUpdate) {
    try {
      const { id, ...rest } = data;
      await COMPONENTES_ELETRONICOS_COLLECTION.doc(id).update(rest);
      return;
    } catch (error) {
      console.error("Error updating componente: ", error);
      return;
    }
  }
}
