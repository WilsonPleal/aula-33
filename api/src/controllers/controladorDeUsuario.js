const servicoDeUsuario = require("../services/servicoDeUsuario");

exports.obterTodosUsuarios = async (_req, res) => {
  try {
    const usuarios = await servicoDeUsuario.obterTodosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send("Erro ao recuperar usuários");
  }
};

exports.criarNovoUsuario = async (req, res) => {
  const { nome, email, cpf } = req.body;
  try {
    const novoUsuario = await servicoDeUsuario.criarNovoUsuario(
      nome,
      email,
      cpf
    );
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).send("Erro ao criar usuário");
  }
};
