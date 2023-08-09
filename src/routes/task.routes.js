import { Router } from "express";
import { authRequired } from "../middelwares/validateToken.js";

const router = Router();

router.get("/tasks", authRequired ,(req, res) => {
  res.send("tasks con exito");
});

export default router;

