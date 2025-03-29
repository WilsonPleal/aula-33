const servicoDeUsuario = require("../services/servicoDeUsuario");

exports.pegarTodos = async (_req, res) => {
  const usuarios = await servicoDeUsuario.buscarTodos();

  if (usuarios.length === 0) {
    return res.status(404).json({ messagem: "Nenhum usuário foi encontrado." });
  }

  res.status(200).json(usuarios);
};
