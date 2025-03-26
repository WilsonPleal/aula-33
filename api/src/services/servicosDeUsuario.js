const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.obterTodosUsuarios = async () => {
  return await repositorioDeUsuario.encontrarTodosUsuarios();
};

exports.obterUsuarioPeloID = async (id) => {
  return await repositorioDeUsuario.encontrarPeloID(id);
};

exports.obterUsuarioPeloEmail = async (email) => {
  return await repositorioDeUsuario.encontrarPeloEmail(email);
};

exports.obterUsuarioPeloCpf = async (cpf) => {
  return await repositorioDeUsuario.encontrarPeloCpf(cpf);
};