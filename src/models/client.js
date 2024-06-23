const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
  localidad: String,
  codigo_postal: String,
  producto: String,
  tipo_cliente: String,
  user: { type:Schema.Types.ObjectId, ref: 'User' } // Referencia al modelo User por su nombre como string
});

const clientModel = mongoose.model("Client", clientSchema);

module.exports = clientModel;