import Proyecto from "../database/model/proyecto.js";

export const listarProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ mensaje: "No se pudo encontrar la lista de proyecctos" });
  }
};

export const obtenerProyecto = async (req, res)=>{
try{
console.log(req.params.id)
const proyectoBuscado = await Proyecto.findById(req.params.id);
res.status(200).json(proyectoBuscado);
}catch (error){
  console,log(error);
  res.status(404).json({mensaje: 'No se encontro el proyecto solicitado'});
}
}

export const crearProyecto = async (req, res) => {
  try {
    console.log(req.body);
    const proyectoNuevo = new Proyecto(req.body);
    await proyectoNuevo.save();
    res.status(201).json({
      mensaje: "El proyecto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "No se pudo procesar la solicitud de crear proyecto.",
    });
  }
};

export const editarProyecto = async (req,res) =>{
  try{
    const buscarProyecto = await Proyecto.findById(req.params.id);
    if(!buscarProyecto){
      return res.status(404).json({mensaje: 'No se pudo editar el proyecto, el id es incorrecto'});
    }
    await Proyecto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({mensaje: 'El proyecto fue modificado correctamente'});
  }catch (error){
    console.error(error);
    res.status(500).json({mensaje: 'Ocurrio un error al intentar editar un proyecto'});
  }

}

export const borrarProyecto = async (req, res) => {
  try {
    const buscarProyecto = await Proyecto.findById(req.params.id);
    if (!buscarProyecto) {
      return res
        .status(404)
        .json({
          mensaje: "No se pudo eliminar el proyecto, el id es incorrecto.",
        });
    }
    await Proyecto.findByIdAndDelete(req.params.id);

    res.status(200).json({ mensaje: "El proyecto fue eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar el proyecto" });
  }
};