import express from "express";
import { PlacaEletronicaController } from "../../../controllers/placa";

const placaRouter = express.Router();
const placaController = new PlacaEletronicaController();

placaRouter.get("/", placaController.listPlacas);
placaRouter.get("/:id", placaController.getPlacaById);
placaRouter.post("/add", placaController.createPlaca);
placaRouter.put("/update/:id", placaController.updatePlaca);
placaRouter.delete("/delete/:id", placaController.deletePlaca);

export default placaRouter;
