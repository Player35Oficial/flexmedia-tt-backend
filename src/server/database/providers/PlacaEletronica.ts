import { db } from "../../config";
import {
  IPlacaEletronica,
  IPlacaEletronicaCreate,
  IPlacaEletronicaUpdate,
} from "../models/PlacaEletronica";

const PLACAS_ELETRONICAS_COLLECTION = db.collection("placas_eletronicas");

export class PlacaEletronicaProvider {
  async getPlacas(): Promise<IPlacaEletronica[]> {
    const snapshot = await PLACAS_ELETRONICAS_COLLECTION.get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IPlacaEletronica[];
  }

  async getPlacaById(id: string): Promise<IPlacaEletronica | undefined> {
    const doc = await PLACAS_ELETRONICAS_COLLECTION.doc(id).get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() } as IPlacaEletronica;
    }
  }

  async createPlaca(data: IPlacaEletronicaCreate): Promise<string | undefined> {
    try {
      const res = await PLACAS_ELETRONICAS_COLLECTION.add(data);
      if (res.id) {
        return res.id;
      }
    } catch (error) {
      console.error("Error creating placa: ", error);
      return;
    }
  }

  async deletePlaca(id: string): Promise<void> {
    try {
      await PLACAS_ELETRONICAS_COLLECTION.doc(id).delete();
      return;
    } catch (error) {
      console.error("Error deleting placa: ", error);
      return;
    }
  }

  async updatePlaca(data: IPlacaEletronicaUpdate): Promise<void> {
    try {
      const { id, ...rest } = data;
      await PLACAS_ELETRONICAS_COLLECTION.doc(id).update(rest);
      return;
    } catch (error) {
      console.error("Error updating placa: ", error);
      return;
    }
  }
}
