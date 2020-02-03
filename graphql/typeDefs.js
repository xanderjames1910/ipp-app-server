const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    nombre: String!
    cedula: String!
    telefono: String!
    username: String!
    email: String!
    genero: String!
    perfil: String!
    direccion: String!
    token: String!
    createdAt: String!
  }
  type BASE_MAESTRA {
    _id: ID!
    COMPLETAMIENTO: String!
    DP_COOR_X: Float!
    DP_COOR_Y: Float!
    DP_POZO: String!
    DP_RESERVORIO: String!
    DP_CAMPO: String!
    DP_PAD: String!
    TIPO_TRAYECTORIA: String!
    DP_LATITUD: String!
    DP_LONGITUD: String!
    PD_FECHA_INICIO_PRODUCCION: String!
    PD_PROFUNDIDAD: String!
    PD_TIPO_POZO: String!
    DP_OPERADORA: String!
    PD_FECHA_COMPLETACION: String!
    PD_FECHA_PERFORACION: String!
    id: Int
  }
  type DATOS_DIARIOS {
    _id: ID!
    COMPLETAMIENTO: String!
    FECHA: String!
    PD_HRS_PROD: Int!
    PD_PETROLEO: Float!
    PD_GAS: Float!
    PD_AGUA: Float!
    id: Int
  }
  input RegisterInput {
    nombre: String!
    cedula: String!
    telefono: String!
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
    genero: String!
    perfil: String!
    direccion: String!
  }
  input BaseMaestraInput {
    COMPLETAMIENTO: String!
    DP_COOR_X: Float!
    DP_COOR_Y: Float!
    DP_POZO: String!
    DP_RESERVORIO: String!
    DP_CAMPO: String!
    DP_PAD: String!
    TIPO_TRAYECTORIA: String!
    DP_LATITUD: String!
    DP_LONGITUD: String!
    PD_FECHA_INICIO_PRODUCCION: String!
    PD_PROFUNDIDAD: String!
    PD_TIPO_POZO: String!
    DP_OPERADORA: String!
    PD_FECHA_COMPLETACION: String!
    PD_FECHA_PERFORACION: String!
    id: Int
  }
  input DatosDiariosInput {
    COMPLETAMIENTO: String!
    FECHA: String!
    PD_HRS_PROD: Int!
    PD_PETROLEO: Float!
    PD_GAS: Float!
    PD_AGUA: Float!
    id: Int
  }
  type Query {
    getUsers: [User]
    getDataBaseMaestra: [BASE_MAESTRA]
    getDataDiaria: [DATOS_DIARIOS]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createBaseMaestra(baseMaestraInput: BaseMaestraInput): BASE_MAESTRA!
    createDatosDiario(datosDiariosInput: DatosDiariosInput): DATOS_DIARIOS!
  }
`;
