"use strict";
// ------------------- SEM INTERFACES:
// ----------- ANONYMOUS OBJECT TYPES:
// Um tipo de objeto anônimo é definido sem usar um tipo ou interface específica.
function saudacoes(pessoa) {
    // definindo pessoa que tem como tipo um objeto com atributos 
    // nome (tipo string) e idade (tipo number)
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
console.log("--------------------------------------------------------------------------------");
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
// criação do objeto carro1 sem passar o tipo Veiculo. Sem usar as funcionalidades do TS.
const carro1 = {
    marca: 'VW',
    modelo: 'Polo',
    ano: 2021,
    kilometragem: 35000,
    // não foi passado se é unicoDono, pois é opcional
    // aqui não teremos erro, pois não definimos carro1 sendo do tipo Veiculo!
    cor: 'vermelho',
    // coisas desse tipo podem causar confusão, como pode exemplo:
    quilometragem: 30000 // perceba que agora temos kilometragem e quilometragem
};
apresentarCarro(carro1);
alterarKm(carro1);
apresentarCarro(carro1);
console.log(carro1.cor); // pode ser problemático!
console.log(carro1.kilometragem);
console.log(carro1.quilometragem); // pode ser problemático!
// Se tentarmos criar um objeto carro2 do tipo Veiculo, e adicionarmos uma cor, 
// teremos um erro, pois 'cor' não existe na interface Veiculo: 
const carro2 = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2014,
    kilometragem: 44000,
    //cor: 'branco' // ---------------> 'cor' does not exist in type 'Veiculo'.
    //quilometragem: 50000 // ----------> 'quilometragem' does not exist in type 'Veiculo'
};
console.log("--------------------------------------------------------------------------------");
const developer = {
    nome: 'Jão',
    salario: 8000,
    calculaPLR() {
        const multiplicadorPLR = 3;
        return this.salario * multiplicadorPLR;
    }
};
console.log('A PLR do ' + developer.nome + ' é de ' + developer.calculaPLR());
console.log("--------------------------------------------------------------------------------");
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
console.log("--------------------------------------------------------------------------------");
