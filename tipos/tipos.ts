// ====================== TIPOS INFERIDOS/IMPLÍCITOS: 

// ---- string
let nome = "Allan" // tipo string inferido
console.log(nome)
// nome = 30

// ---- number
let tamanho = 30 // tipo number inferido
console.log(nome)
// tamanho = 'Ana'
tamanho = 30.5 
console.log(tamanho)


// ----- boolean 
let eMaiorDe18 = false // tipo boolean inferido
// eMaiorDe18 = 1
eMaiorDe18 = true
console.log(eMaiorDe18)


// ---- flexibilizando os tipos que a variável pode receber! 
// Para tanto, o valor é atribuído depois:
let idade
idade = 30 
console.log(typeof idade) // number
idade = 'a idade é 30'
console.log(typeof idade) //string
// é como um any implícito


// ====================== TIPOS EXPLÍCITOS: 
let altura: number
altura = 1.78
console.log(altura)
console.log(typeof altura)
// altura = 'a altura é 1.78' // 'string' is not assignable to type 'number'

// ---- string
let atacante: string = "Ronaldo"
console.log(atacante)
// atacante = 30

let peso: number = 85
console.log(peso)
//peso = 'o peso é' // 'string' is not assignable to type 'number'

let eNumberoNove: boolean = false
eNumberoNove = true
console.log(eNumberoNove)

let qualquer: any = 'olá a todos!'
console.log(qualquer)

qualquer = 10
console.log(qualquer)

qualquer = true
console.log(qualquer)


// ----- Arrays (inferido):
let jogadores = ["Gabi", "Pedro", "Arrascaeta"]
console.log(jogadores[0])
console.log(typeof jogadores) // object
// jogadores = [400] // 'number' is not assignable to type 'string'. 

// arrays de qualquer tipo:
let qualquerCoisa: any[] = ["Brasil", "Argentina"]
console.log(qualquerCoisa) // ['Brasil', 'Argentina']

qualquerCoisa = [100]
console.log(qualquerCoisa) // 100

//qualquerCoisa = 200 // erro, pois aqui não é um array


// -------- TUPLAS:
// As tuplas podem conter diferentes tipos...
// As tuplas são úteis quando a ordem dos elementos é importante 
// e você precisa trabalhar com diferentes tipos de dados. 
let dadosPessoa: [string, number, string] = ['Thiago Adriano', 34, 'tadriano.net@gmail.com'];
console.log(dadosPessoa);

//dadosPessoa = [10, "Alice", "alice@gmail.com"] // erro devido a ordem dos elementos



// -------- ENUMS: 
// Enums allow a developer to define a set of named constants.
enum Cor {
    Preto, // 0
    Azul, // 1 
    Vermelho, // 2
    Amarelo = 100, // 100
    Prata // now, Prata is 101
}

let corCarro: Cor = Cor.Azul
console.log(corCarro); // 1 

let corCarro2: Cor = Cor.Prata
console.log(corCarro2); // 101








