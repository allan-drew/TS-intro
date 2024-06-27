"use strict";
// ---------- TYPES:
// é um alias para um tipo.
// Types são usados p/ nomear tipos primitivos, uniões, interseções e combinações de tipos.
let resposta;
resposta = true; // OK
resposta = "true"; // OK
resposta = "Sim"; // OK
const position1 = "center"; // OK
const position2 = undefined; // OK
let statusAtual = "ativo"; // OK
// statusAtual = "aguardando"  // ERRO 
// se não usarmos o type poderemos colocar qualquer coisa:
let status2 = "ativo";
status2 = "aguardando";
status2 = "qualquer status";
const center = { x: 0, y: 0, raio: 5 }; // OK
