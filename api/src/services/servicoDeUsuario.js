const repositorioDeUsuario = require("../repositories/repositorioDeUsuario");

exports.buscarTodos = async () => await repositorioDeUsuario.buscarTodos();
