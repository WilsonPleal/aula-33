const express = require("express");
const controladorDeUsuario = require("../controllers/controladorDeUsuario");
const rotasDeUsuario = express.Router();

rotasDeUsuario.get("/", controladorDeUsuario.pegarTodos);

module.exports = rotasDeUsuario;
