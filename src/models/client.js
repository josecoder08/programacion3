const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new mongoose.Schema({
  firtname: String,
  lastname: String,
  email: String,
  domicilio:String,
  celular:String,
  documento:String,
  rol:String,
  area:String,
});

const clientModel = mongoose.model("Client", clientSchema);

module.exports = clientModel;