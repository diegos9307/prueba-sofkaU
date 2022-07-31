import mongoose from "mongoose";

const naveSchema = new mongoose.Schema({
  tipoNave: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pertenece: {
    type: String,
    required: true,
  },
  combustible: {
    type: String,
    required: true,
  },
  empuje: {
    type: String,
  },
  capacidadTransporte: {
    type: String,
  },
  altura: {
    type: Number,
  },
});

export const Nave = mongoose.model("Nave", naveSchema);
