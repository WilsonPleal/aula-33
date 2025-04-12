const bcrypt = require("bcrypt");

class Usuario {
  constructor(nome, email, cpf, senha) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.senha = this.cryptografarSenha(senha);
  }
  id = Math.floor(Math.random() * 2000);//O ID ESTA ALEATORIO criando uma senha numerica ATE 2000 
  nacionalidade = "Brasileiro";

  buscarUsuarioPeloEmail() {
    return usuarios.find((usuario) => usuario.email === email);// aqui retorna o email 
  }

  verificaSenha(senha) {
    return this.senha === senha; // aeroFUNCTION sempre retorna!
  }
  async cryptografarSenha(senha) {
    return await bcrypt.hash(senha, 10);
  }

async compararSenha(senha) {
    return await bcrypt.compare(senha, this.senha)
}
}

const kakaroto = new Usuario(
  "Vegeta",
  "gokuhouse@hami.com",
  "666.999.123-01",
  "VermeInsolente"
);

kakaroto.senha.then(console.log)
console.log(kakaroto.verificaSenha("VermeInsolente"))
