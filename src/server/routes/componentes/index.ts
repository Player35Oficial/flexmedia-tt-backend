import express from "express";
import { ComponenteController } from "../../../controllers/componente";

const componenteRouter = express.Router();
const componenteController = new ComponenteController();

// Componentes Eletrônicos Routes
componenteRouter.get("/", componenteController.listComponentes);
componenteRouter.get("/:id", componenteController.getComponenteById);
componenteRouter.post("/add", componenteController.createComponente);
componenteRouter.delete("/delete/:id", componenteController.deleteComponente);
componenteRouter.put("/update/:id", componenteController.updateComponente);
componenteRouter.get("/helper/nomes", (req, res, next) =>
  componenteController.listComponentesNames(req, res).catch(next)
);

componenteRouter.post(
  "/consolando/almas/tristes",
  componenteController.seedDatabase
);

export default componenteRouter;
