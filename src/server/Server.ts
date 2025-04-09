import express from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes";
import componenteRouter from "./routes/componentes";
import placaRouter from "./routes/placas";

const server = express();

server.use(cors());

server.use(express.json());

server.use(router);

server.use("/api/componentes", componenteRouter);

server.use("/api/placas", placaRouter);

export { server };
