import express from "express";
import cors from "cors";
import "dotenv/config";
import "./config/dbConfig.js";
import navesRouter from "./routes/naves.routes.js";

// Express configuración
const app = express();

// Definición del Puerto
const PORT = process.env.PORT || 5000;

// cors para el despliegue
app.use(cors());

//Rutas
app.use(express.json());
app.use("/api", navesRouter);

app.listen(PORT, console.log(`running in port ${PORT}`));
