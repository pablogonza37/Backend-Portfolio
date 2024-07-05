import Certificado from "../database/model/certificado.js";

export const listarCertificados = async(req, res) => {
    try {
      const certificados = await Certificado.find();
      res.status(200).json(certificados);   
    } catch (error) {
      console.log(error)
      res.status(404).json({mensaje: 'No se pudo encontrar la lista de certificados'})
    }
  };

  export const obtenerCertificado = async (req, res)=>{
    try {
      const CertificadoBuscado = await Certificado.findById(req.params.id);
      res.status(200).json(CertificadoBuscado);
    } catch (error) {
      console.log(error)
      res.status(404).json({ mensaje: 'No se encontro el certificado solicitado'})
    }
  }

export const crearCertificado = async (req, res) => {
    try {
      const CertificadoNuevo = new Certificado(req.body);
      await CertificadoNuevo.save();
      res.status(201).json({
        mensaje: "La Certificado fue agregada correctamente"
      })
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "No se pudo procesar la solicitud de agregar el contacto"
      })
    }
  };


  
  export const borrarCertificado = async (req, res) => {
    try {
      const buscarCertificado = await Certificado.findById(req.params.id);
      if (!buscarCertificado) {
        return res
          .status(404)
          .json({
            mensaje: "No se pudo eliminar la Certificado, el id es incorrecto.",
          });
      }
      await Certificado.findByIdAndDelete(req.params.id);
  
      res.status(200).json({ mensaje: "La Certificado fue eliminada exitosamente" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar borrar la Certificado" });
    }
  };

  export const editarCertificado = async (req, res) => {
    try {
      const buscarCertificado = await Certificado.findById(req.params.id);
      if (!buscarCertificado) {
        return res
          .status(404)
          .json({
            mensaje: "No se pudo editar el certificado, el id es incorrecto.",
          });
      }
      await Certificado.findByIdAndUpdate(req.params.id, req.body);
      res
        .status(200)
        .json({ mensaje: "El certificado fue modificado exitosamente" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ mensaje: "Ocurrio un error al intentar editar el certificado" });
    }
  };