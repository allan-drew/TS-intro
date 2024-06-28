// ================== CÓDIGO COM ARQUIVO no modo app.js (JAVASCRIPT) =================================
 

import { Compra } from "./models/compra.js";

// criando uma instancia de Compra
const compra01 = new Compra(new Date(), 10, 100)
console.log(compra01);
console.log(compra01.data);
console.log(compra01.quantidade);
console.log(compra01.valor);
console.log(compra01.volume);


// ------------------------ PROBLEMAS COM O JAVASCRIPT: 

// -------------  01 
// No caso de atribuirmos uma quantidade, vemos que os atributos privados não vão
// deixar a alteração acontecer....
// ENTRETANTO, com o JS, só conseguiremos perceber o erro em RUNTIME
// compra01.quantidade = 25 // ERROR: Radonly property. Trata-se de um get

// ------------- 02 
// Adicionando propriedade dinamicamente ao código JS! Não dá erro, o que pode confundir o desenvolvedor
compra01.quantida = 40 
console.log(compra01.quantida); // No JS, passa normal e não dá erro!

     // No caso do TYPESCRIPT, o compilador irá informar o problema de que
     // 'quantida' does not exist on type 'Compra'.

// ------------- 03
// Possibilidade de obtermos NaN or undefined ao esquecermos de passar alguma propriedade
const compra02 = new Compra(new Date()) // só foi passado Date()
console.log(compra02.quantidade); // undefined
console.log(compra02.valor); // undefined

     // No caso do TYPESCRIPT, o compilador irá informar que estava esperando 3 argumentos,
     // porém encontrou apenas 1. 

// ------------------------

