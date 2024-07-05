import mongoose, {Schema} from "mongoose";

const proyectoSchema = new Schema({
    nombreProyecto:{
        type: String,
        required: true,
        unique: true,
        minLength:2,
        maxLength:50
    },
    imagen:{
        type:String,
        required:true,
    },
    descripcion: {
        type: String,
        required:true,
        minLength:10,
        maxLength:500
    },
    tipo:{
        type:String,
        required: true,
        enum: ['frontend','backend', 'fullstack']
    },
    github:{
        type: String,
        required: true,
        unique: true,
        
    },
    deploy:{
        type: String,
        required: true,
        unique: true,
    },
    tecnologias: {
        type: String,
        required: true,
    }
})

const Proyecto = mongoose.model('proyecto', proyectoSchema);

export default Proyecto;