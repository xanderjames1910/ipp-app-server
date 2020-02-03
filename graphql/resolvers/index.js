const baseMaestraResolvers = require('./baseMaestra');
const usersResolvers = require('./users');
const datosDiariosResolvers = require('./datosDiarios');

module.exports = {
  Query: {
    ...usersResolvers.Query,
    ...baseMaestraResolvers.Query,
    ...datosDiariosResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...baseMaestraResolvers.Mutation,
    ...datosDiariosResolvers.Mutation,
  },
};
