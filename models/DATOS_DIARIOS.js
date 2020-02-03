const { model, Schema } = require('mongoose');

const datosDiariosSchema = new Schema({
  COMPLETAMIENTO: String,
  COMPLETAMIENTO: String,
  FECHA: String,
  PD_HRS_PROD: Number,
  PD_PETROLEO: String,
  PD_GAS: String,
  PD_AGUA: String,
  id: Number,
});

module.exports = model('DATOS_DIARIOS', datosDiariosSchema);
