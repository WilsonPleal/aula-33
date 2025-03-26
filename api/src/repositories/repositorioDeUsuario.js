const usuarios = [
  { id: 1, nome: "Alice" },
  { id: 2, nome: "Bob" },
  { id: 3, nome: "Carol" }
];

exports.encontrarTodosUsuarios = async () => {
  // Aqui você pode fazer a consulta real ao banco de dados
  return usuarios;
};

exports.encontrarPeloID = async (id) => {
  return usuarios.find((usuario) => usuario.id === id);
};

exports.encontrarPeloEmail = async (email) => {
  return usuarios.find((usuario) => usuario.email === email);
};

exports.encontrarPeloCpf = async (cpf) => {
  return usuarios.find((usuario) => usuario.cpf === cpf);
};
