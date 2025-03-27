const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.obterTodosUsuarios = async () => {
  return await repositorioDeUsuario.encontrarTodosUsuarios();
};

exports.adicionarUsuario = async (usuario) => {
  return await repositorioDeUsuario.adicionarUsuario(usuario);
}