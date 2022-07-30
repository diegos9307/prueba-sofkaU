import express from "express";
import { registrarNave } from "../controllers/naves.controllers.js";

const router = express.Router();

// Crear Nave
router.post("/registrarNave", registrarNave);

export default router;
