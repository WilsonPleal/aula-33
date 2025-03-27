const usuarios = [
  {
    "id": "925f1bac-e043-40c5-bac2-2ccab5ef92fe",
    "nome": "Ada Lovelace",
    "cpf": "12345678912",
    "email": "adalovelace@email.com",
    "senha": "$2b$10$RJ/qMPtPHPrv6P1Z7OjfweVYyhIfzg8uAHXfAdP5QvDxriK2SQu.K"
  },
  {
    "id": "c0f7e291-bf51-4bb6-b844-fba97cfdc545",
    "nome": "Alan Turing",
    "cpf": "12345678912",
    "email": "alanturing@email.com",
    "senha": "$2b$10$ekjLiRuXwfIqNmCUcTTXH.UX1Xh8VJl48LPmBdE3MVgLHcCaF9JMW"
  }
];

exports.encontrarTodosUsuarios = async () => {
  return usuarios;
};

exports.adicionarUsuario = async (usuario) => {
  const novoUsuario = { id: usuarios.length + 1, ...usuario };
  usuarios.push(novoUsuario);
  return novoUsuario;
}
