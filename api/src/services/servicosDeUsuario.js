const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.obterTodosUsuarios = async () => {
  return await repositorioDeUsuario.encontrarTodosUsuarios();
};
