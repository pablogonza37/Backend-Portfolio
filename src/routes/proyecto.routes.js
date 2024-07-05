import { Router } from "express";
import {
  borrarProyecto,
  crearProyecto,
  editarProyecto,
  listarProyectos,
  obtenerProyecto,
} from "../controllers/proyectos.controllers.js";

const router = Router();

router.route("/proyectos").get(listarProyectos).post(crearProyecto);
router
  .route("/proyectos/:id")
  .get(obtenerProyecto)
  .put(editarProyecto)
  .delete(borrarProyecto);

export default router;
