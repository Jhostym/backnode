import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import { authRequired } from "../middelwares/validateToken.js";
import { validateSchema } from "../middelwares/validate.auth.js";
import { createTaskSchema } from "../schemas/task.schema.js";


const router = Router();

router.get("/tasks", authRequired, getTasks);

router.post("/tasks", authRequired, validateSchema(createTaskSchema), createTask);

router.get("/tasks/:id", authRequired, getTask);

router.put("/tasks/:id", authRequired, updateTask);

router.delete("/tasks/:id", authRequired, deleteTask);

export default router;