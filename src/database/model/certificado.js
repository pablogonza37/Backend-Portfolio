import mongoose, { Schema } from "mongoose";

const CertificadoSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  institucion: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 1000,
  },
  expedicion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const Certificado = mongoose.model("certificado", CertificadoSchema);

export default Certificado;
