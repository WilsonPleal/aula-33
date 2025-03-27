const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.obterTodosUsuarios = async () => {
  return await repositorioDeUsuario.encontrarTodosUsuarios();
};

exports.criarNovoUsuario = async (nome, email, cpf) => {
  return await repositorioDeUsuario.criarNovoUsuario(nome, email, cpf);
};
