import { Router } from "express";

const router = Router();

router.get("/api", (req, res) => {
  res.send("Welcome to the API!");
});

export { router };
