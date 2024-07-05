import { Router } from "express";
import { borrarConsulta, crearConsulta, listarConsultas, obtenerConsulta } from "../controllers/consultas.controllers.js";

const router = Router();

router.route("/consultas").post(crearConsulta).get(listarConsultas);
router
  .route("/consultas/:id")
  .get(obtenerConsulta).delete(borrarConsulta)

export default router;