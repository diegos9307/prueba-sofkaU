import express from "express";
import {
  obtenerNaves,
  registrarNave,
  obtenerNave,
  actualizarNave,
  eliminarNave,
} from "../controllers/naves.controllers.js";

const router = express.Router();

// Crear Nave
router.post("/registrarNave", registrarNave);

// Obtener todas las Naves
router.get("/nave", obtenerNaves);

// Obtener una Nave
router.get("/nave/:id", obtenerNave);

// Actualizar una Nave
router.put("/nave/:id", actualizarNave);

// Eliminar una Nave
router.delete("/nave/:id", eliminarNave);

export default router;
