import mongoose, {Schema} from "mongoose";

const consultaSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLength:2,
        maxLength:50
    },
    email: {
        type: String,
        require: true,
      },
    consulta: {
        type: String,
        required:true,
        minLength:10,
        maxLength:1500
    },
    fecha: {
        type: String,
        required: true,
    } 
})

const Consulta = mongoose.model('consulta', consultaSchema);

export default Consulta;