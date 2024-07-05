import { Router } from "express";
import { borrarCertificado, crearCertificado, editarCertificado, listarCertificados, obtenerCertificado } from "../controllers/certificados.controllers.js";

const router = Router();

router.route("/certificados").post(crearCertificado).get(listarCertificados);
router
  .route("/certificados/:id")
  .get(obtenerCertificado).delete(borrarCertificado).put(editarCertificado)

export default router;