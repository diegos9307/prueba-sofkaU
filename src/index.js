import express from "express";
import "dotenv/config";
import "./config/dbConfig.js";
import navesRouter from "./routes/naves.routes.js";

// Express configuración
const app = express();

// Definición del Puerto
const PORT = process.env.PORT || 5000;

//Rutas
app.use("/api", navesRouter);

app.listen(PORT, console.log(`running in port ${PORT}`));
