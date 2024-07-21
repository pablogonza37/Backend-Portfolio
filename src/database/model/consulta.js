import mongoose, {Schema} from "mongoose";

const consultaSchema = new Schema({
    nombre:{
        type: String,
        required: true, 
        minLength:2,
        maxLength:50,
        unique: false
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
        
    } 
})

const Consulta = mongoose.model('consulta', consultaSchema);

export default Consulta;