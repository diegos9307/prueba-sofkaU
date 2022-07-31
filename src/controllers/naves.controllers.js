import { Nave } from "../models/Nave.js";
/* import { TipoNave } from "../helpers/creacionNave.js"; */

export const registrarNave = async (req, res) => {
  const {
    tipoNave,
    name,
    pertenece,
    combustible,
    empuje,
    capacidadTransporte,
    altura,
  } = req.body;
  try {
    let nave = await Nave.findOne({ name });
    if (nave) {
      return res.json({ error: "Ya existe esta nave" });
    } else {
      nave = new Nave({
        tipoNave,
        name,
        pertenece,
        combustible,
        empuje,
        capacidadTransporte,
        altura,
      });
    }
    await nave.save();
    res.json({
      status: "SUCESS",
      message: "Nave creado exitosamente",
    });
  } catch (error) {
    res.json({ message: `Ha ocurrido un error: ${error}` });
  }
};

export const obtenerNaves = async (req, res) => {
  try {
    const naves = await Nave.find();
    if (naves.length === 0) {
      res.json({ message: "No hay naves en la base de datos" });
    } else {
      res.json({
        status: "SUCESS",
      });
    }
  } catch (error) {
    res.json({ message: `Ha ocurrido un error: ${error}` });
  }
};

export const obtenerNave = async (req, res) => {
  const { id } = req.params;
  try {
    const nave = await Nave.findById(id);
    res.json({
      status: "SUCESS",
      data: nave,
    });
  } catch (error) {
    res.json({ message: `Ha ocurrido un error: ${error}` });
  }
};

export const actualizarNave = async (req, res) => {
  const { id } = req.params;
  const {
    tipoNave,
    name,
    pertenece,
    combustible,
    empuje,
    capacidadTransporte,
    altura,
  } = req.body;
  try {
    const actNave = await Nave.updateOne(
      { _id: id },
      {
        $set: {
          tipoNave,
          name,
          pertenece,
          combustible,
          empuje,
          capacidadTransporte,
          altura,
        },
      }
    );
    res.json({
      status: "SUCESS",
      message: "Los datos de la nave se han actualizado correctamente",
      data: actNave,
    });
  } catch (error) {
    res.json({ message: `Ha ocurrido un error: ${error}` });
  }
};

export const eliminarNave = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminarNave = await Nave.remove({ _id: id });
    res.json({
      status: "SUCESS",
      message: "Los datos de la nave se han eliminado correctamente",
      data: eliminarNave,
    });
  } catch (error) {
    res.json({ message: `Ha ocurrido un error: ${error}` });
  }
};
