import Consulta from "../database/model/consulta.js";
import consultaRealizada from '../helpers/mensaje.js'

export const listarConsultas = async(req, res) => {
    try {
      const consultas = await Consulta.find();
      res.status(200).json(consultas);   
    } catch (error) {
      console.log(error)
      res.status(404).json({mensaje: 'No se pudo encontrar la lista de consultas'})
    }
  };

  export const obtenerConsulta = async (req, res)=>{
    try {
      const consultaBuscada = await Consulta.findById(req.params.id);
      res.status(200).json(consultaBuscada);
    } catch (error) {
      console.log(error)
      res.status(404).json({ mensaje: 'No se encontro el contacto solicitado'})
    }
  }

export const crearConsulta = async (req, res) => {
    try {
      const consultaNueva = new Consulta(req.body);
      console.log(consultaNueva)
      await consultaNueva.save();
      res.status(201).json({
        mensaje: "La consulta fue agregada correctamente"
      })
      consultaRealizada(consultaNueva.nombre, consultaNueva.email, consultaNueva.consulta, consultaNueva.fecha)
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "No se pudo procesar la solicitud de agregar el contacto"
      })
    }
  };


  
  export const borrarConsulta = async (req, res) => {
    try {
      const buscarConsulta = await Consulta.findById(req.params.id);
      if (!buscarConsulta) {
        return res
          .status(404)
          .json({
            mensaje: "No se pudo eliminar la consulta, el id es incorrecto.",
          });
      }
      await Consulta.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ mensaje: "La consulta fue eliminada exitosamente" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar borrar la consulta" });
    }
  };