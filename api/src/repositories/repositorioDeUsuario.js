const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Carol" }
];

exports.encontrarTodosUsuarios = async () => {
  return usuarios;
};

exports.adicionarUsuario = async (usuario) => {
  const novoUsuario = { id: usuarios.length + 1, ...usuario };
  usuarios.push(novoUsuario);
  return novoUsuario;
}
