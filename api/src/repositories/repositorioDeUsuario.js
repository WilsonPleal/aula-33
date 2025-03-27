const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Carol" }
];

exports.encontrarTodosUsuarios = async () => {
  return usuarios;
};

exports.criarNovoUsuario = async (nome, email, cpf) => {
  const usuario = { id: usuarios.length + 1, nome, email, cpf };
  usuarios.push(usuario);
  return usuario;
};
