const BASE_MAESTRA = require('../../models/BASE_MAESTRA');

module.exports = {
  Query: {
    async getDataBaseMaestra() {
      try {
        console.log('Se Ejecuta');
        const baseMaestra = await BASE_MAESTRA.find();
        return baseMaestra;
      } catch (err) {
        throw new Error(err);
      }
    },
    // async getPost(_, { postId }) {
    //   try {
    //     const post = await Post.findById(postId);
    //     if (post) {
    //       return post;
    //     } else {
    //       throw new Error('Post no encontrado');
    //     }
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
  },
  Mutation: {
    async createBaseMaestra(
      _,
      {
        baseMaestraInput: {
          COMPLETAMIENTO,
          DP_COOR_X,
          DP_COOR_Y,
          DP_POZO,
          DP_RESERVORIO,
          DP_CAMPO,
          DP_PAD,
          TIPO_TRAYECTORIA,
          DP_LATITUD,
          DP_LONGITUD,
          PD_FECHA_INICIO_PRODUCCION,
          PD_PROFUNDIDAD,
          DP_OPERADORA,
          PD_FECHA_COMPLETACION,
          PD_FECHA_PERFORACION,
          id,
        },
      },
    ) {
      const newCompletamiento = new BASE_MAESTRA({
        COMPLETAMIENTO,
        DP_COOR_X,
        DP_COOR_Y,
        DP_POZO,
        DP_RESERVORIO,
        DP_CAMPO,
        DP_PAD,
        TIPO_TRAYECTORIA,
        DP_LATITUD,
        DP_LONGITUD,
        PD_FECHA_INICIO_PRODUCCION,
        PD_PROFUNDIDAD,
        DP_OPERADORA,
        PD_FECHA_COMPLETACION,
        PD_FECHA_PERFORACION,
        id,
      });

      const completamiento = await newCompletamiento.save();

      return completamiento;
    },
  },
};
