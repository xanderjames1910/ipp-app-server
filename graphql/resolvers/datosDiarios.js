// const postgresDB = require('../../postgres/postgresDB');

// module.exports = {
//   Query: {
//     async getDataDiaria() {
//       try {
//         const dataPorDia = await postgresDB.models.DATOS_DIARIOS.findAll();
//         return dataPorDia;
//       } catch (err) {
//         throw new Error(err);
//       }
//     },
//   },
// };
const DATOS_DIARIOS = require('../../models/DATOS_DIARIOS');

module.exports = {
  Query: {
    async getDataDiaria() {
      try {
        const dataPorDia = await DATOS_DIARIOS.find().limit(30);
        return dataPorDia;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createDatosDiario(
      _,
      { datosDiariosInput: { COMPLETAMIENTO, FECHA, PD_HRS_PROD, PD_PETROLEO, PD_GAS, PD_AGUA, id } },
    ) {
      const newDatoDiario = new DATOS_DIARIOS({
        COMPLETAMIENTO,
        FECHA,
        PD_HRS_PROD,
        PD_PETROLEO,
        PD_GAS,
        PD_AGUA,
        id,
      });

      const datoDiario = await newDatoDiario.save();

      return datoDiario;
    },
  },
};
