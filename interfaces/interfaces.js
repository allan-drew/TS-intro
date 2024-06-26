"use strict";
// ------------------- SEM INTERFACES:
// function saudacoes(pessoa: any) { 
function saudacoes(pessoa) {
    // definindo pessoa que tem como tipo um objeto com atributo nome (tipo string) e idade (tipo number)
    // e idade do tipo number
    console.log("Olá, sou " + pessoa.nome + " e tenho " + pessoa.idade + " anos!");
}
function mudarIdade(pessoa) {
    // definindo pessoa que tem como tipo um objeto com atributo idade (tipo number)
    pessoa.idade = pessoa.idade + 1;
}
// ----- 
const pessoa1 = {
    nome: "Alice",
    idade: 30
};
saudacoes(pessoa1);
mudarIdade(pessoa1);
saudacoes(pessoa1);
mudarIdade(pessoa1);
saudacoes(pessoa1);
// ----- 
const pessoa2 = {
    nome: "Theo",
    idade: 0,
    // podemos adicionar mais atributos sem erros, pois não temos as interfaces (ver abaixo)
    corOlhos: "castanhos",
    alturaEmCm: 70
};
mudarIdade(pessoa2);
saudacoes(pessoa2);
function apresentarCarro(carro) {
    console.log('Este é o ' + carro.modelo +
        ' da marca ' + carro.marca +
        ', ano ' + carro.ano +
        ', com a kilometragem, ' + carro.kilometragem +
        ' ||| único dono? ' + carro.unicoDono);
}
function alterarKm(carro) {
    carro.kilometragem = carro.kilometragem + 2000;
}
// o objeto carro1 adere a interface Veiculo
const carro1 = {
    marca: 'VW',
    modelo: 'Polo',
    ano: 2021,
    kilometragem: 35000
    // não foi passado se é unicoDono, pois é opcional
};
apresentarCarro(carro1);
alterarKm(carro1);
apresentarCarro(carro1);
const developer = {
    nome: 'Jão',
    salario: 8000,
    calculaPLR() {
        const multiplicadorPLR = 3;
        return this.salario * multiplicadorPLR;
    }
};
console.log('A PLR do ' + developer.nome + ' é de ' + developer.calculaPLR());
// ------------------- USANDO INTERFACES (COM CLASSES):
class Gerente {
    constructor() {
        this.nome = '';
        this.salario = 0;
        // atributo adicional (a classe ainda respeita a interface com o nome, salario e calculaPLR)
        this.tempoComoGerente = 0;
    }
    calculaPLR() {
        const multiplicadorPLR = 6;
        return this.salario * multiplicadorPLR;
    }
}
const gerente001 = new Gerente();
gerente001.nome = 'Mauro';
gerente001.salario = 21500;
console.log('---> nome do gerente => ' + gerente001.nome);
console.log('---> salario do gerente => ' + gerente001.salario);
console.log('---> PLR do gerente => ' + gerente001.calculaPLR());
gerente001.tempoComoGerente = 3;
console.log('---> tempo como gerente => ' + gerente001.tempoComoGerente + ' anos');
