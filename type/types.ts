// ---------- TYPES:
// é um alias para um tipo.
// Types são usados p/ nomear tipos primitivos, uniões, interseções e combinações de tipos.

// Use o type quando precisar definir um tipo mais complexo que não seja um tipo primitivo.

// definindo um tipo:
type StringOrBoolean = string | boolean;
let resposta: StringOrBoolean;

resposta = true // OK
resposta = "true" // OK
resposta = "Sim" // OK
//resposta = 12345 // ERRO ---> is not assignable to type 'StringOrBoolean'


// ------ 
// union type (ou “união” ou “disjunção”) é um conjunto de tipos que são mutuamente exclusivos.
// Ou seja, o tipo representa todos os possíveis tipos simultaneamente.
// Para criar um union type, usamos o operador de união |

// Definindo um type que é a uniao de primitivos com literais:
//     tipos primitivos: suportados pela linguagem, como por exemplo, number, string, undefined, etc...
//     tipos literais: permitem que você defina um conjunto específico de valores 
type Positions = "left" | "center" | "right" | undefined;

const position1: Positions = "center"; // OK
const position2: Positions = undefined; // OK
//const position3: Positions = "bottom"; // ERRO. "bottom"' is not assignable to type 'Positions'.


type Status = "ativo" | "inativo" | "pendente"; 
let statusAtual: Status = "ativo" // OK
// statusAtual = "aguardando"  // ERRO 

// se não usarmos o type poderemos colocar qualquer coisa:
let status2 = "ativo"
status2 = "aguardando" 
status2 = "qualquer status"


// ------------------ 
// Pode-se combinar tipos existentes para criar tipos mais complexos:
type Ponto = { x: number; y: number };
type Circulo = Ponto & { raio: number };
const center: Circulo = { x: 0, y: 0, raio: 5 }; // OK












