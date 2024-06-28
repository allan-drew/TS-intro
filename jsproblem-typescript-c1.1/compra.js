//  ================== CÓDIGO COM ARQUIVO no modo compra.js (JAVASCRIPT) =================================
// export é usado para conseguir importar em outro local
export class Compra {
    // # --> propriedades privadas (não podem ser acessadas diretamente fora da classe.)
    #data;
    #quantidade;
    #valor;

    constructor (data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data() {
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    get volume() {
        return this.#quantidade * this.#valor;
    }
}

