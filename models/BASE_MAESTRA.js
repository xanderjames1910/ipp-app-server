const { model, Schema } = require('mongoose');

const baseMaestraSchema = new Schema({
  COMPLETAMIENTO: String,
  DP_COOR_X: Number,
  DP_COOR_Y: Number,
  DP_POZO: String,
  DP_RESERVORIO: String,
  DP_CAMPO: String,
  DP_PAD: String,
  TIPO_TRAYECTORIA: String,
  DP_LATITUD: String,
  DP_LONGITUD: String,
  PD_FECHA_INICIO_PRODUCCION: String,
  PD_PROFUNDIDAD: String,
  PD_PROFUNDIDAD: String,
  DP_OPERADORA: String,
  PD_FECHA_COMPLETACION: String,
  PD_FECHA_PERFORACION: String,
  id: Number,
});

module.exports = model('BASE_MAESTRA', baseMaestraSchema);
