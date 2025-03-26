const servicosDeUsuario = require("../services/servicosDeUsuario");

exports.obterTodosUsuarios = async (_req, res) => {
  try {
    const usuarios = await servicosDeUsuario.obterTodosUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send("Erro ao recuperar usuários");
  }
};

exports.obterUsuarioPeloID = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send("ID não fornecido.");
  }

  try {
    const usuario = await servicosDeUsuario.obterUsuarioPeloID(id);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado.");
    }
    res.json(usuario);
  } catch (error) {
    console.error(error); // Adiciona o erro no console
    res.status(500).send("Erro ao recuperar usuário pelo ID");
  }
};

exports.obterUsuarioPeloEmail = async (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res.status(400).send("Email não fornecido.");
  }

  try {
    const usuario = await servicosDeUsuario.obterUsuarioPeloEmail(email);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado");
    }
    res.json(usuario);
  } catch (error) {
    console.error(error); // Adiciona o erro no console
    res.status(500).send("Erro ao recuperar usuário pelo email");
  }
};

exports.obterUsuarioPeloCpf = async (req, res) => {
  const { cpf } = req.params;
  if (!cpf) {
    return res.status(400).send("CPF não fornecido.");
  }

  try {
    const usuario = await servicosDeUsuario.obterUsuarioPeloCpf(cpf);
    if (!usuario) {
      return res.status(404).send("Usuário não encontrado");
    }
    res.json(usuario);
  } catch (error) {
    console.error(error); // Adiciona o erro no console
    res.status(500).send("Erro ao recuperar usuário pelo CPF");
  }
};
