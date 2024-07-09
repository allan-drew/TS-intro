console.log("********************************************************************************");

// Decorator is a special kind of declaration that can be attached to a class, method, property, or parameter.

// It consists of an @ symbol followed by a function that executes at runtime, 
// providing information about the decorated declaration.

// Decorators allow you to add metadata and modify the behavior of TypeScript classes and their members

// decorators can add functionality or modify class behavior.
// decorators can alter method behavior.
// decorators can modify property behavior. 
// decorators can provide additional information about the parameter or modify its behavior.

// To enable support for decorators, set the experimentalDecorators compiler option in your tsconfig.json

//-------------------------------------

// ----------------- CLASS DECORATOR -------------------------
// Decorators de classe recebem um parametro, que é o target. 

function LogDec (target: any) { // o target é o constructor da classe
    console.log("           Printando o target ")   
    console.log(target); 
}

@LogDec
class ClasseDecorada {
}

@LogDec
class OutraClasseDecorada {
}

console.log("----------------------------------------------------------------- ");

// ----------------- CLASS DECORATOR (com parametros) -------------------------
// Usando Decorators passando parâmetros! Neste caso, usamos o padrão factory
// Para o caso do class decorator é 1 parametro (target) na arrow function

function LogFacDec (mensagem: string) {
    // retornando uma função (retornando o decorator)
    // ...usando arrow function!
    return (target: any) => { // o target é o constructor da classe
        console.log("           Printando a mensagem e o target ")   
        console.log(mensagem); // resultado: Decorando Minha Classe
        console.log(target); // resultado: class Minha Classe {}
    };
}

@LogFacDec("Decorando Minha Classe")
class MinhaClasse {
}


console.log("----------------------------------------------------------------- ");

// ----------------- CLASS DECORATOR -------------------------

// criando uma propriedade usando um class decorator. 
// Para o caso do class decorator é 1 parametro (target) na arrow function

function setAPIVersion(version: string) {
    return (target: any) => { //recebendo o construtor como parametro
        return class extends target {
            apiVersion = version;
        }
    }
}

@setAPIVersion("1.0.0")
class MinhaAPI {
}

console.log(new MinhaAPI());



console.log("----------------------------------------------------------------- ");

// ----------------- CLASS DECORATOR (mais de um parametro no @ ) -------------------------

function Componente (config: {seletor: string, 
                              templateUrlHtml: string, 
                              styleUrlCss: string}) {
    return (target: any) => {
        console.log("Seletor --> " + config.seletor);
        console.log("Template --> " + config.templateUrlHtml);
        console.log("Style --> " + config.styleUrlCss);
    }
}


@Componente({
    seletor: 'meu-seletor-xyz',
    templateUrlHtml: 'meu-template-url HTML', 
    styleUrlCss: 'meu-style-url CSS'
})
class MeuPrimeiroComponente { }

// console.log(new MeuPrimeiroComponente());


console.log("----------------------------------------------------------------- ");

// ----------------- PROPERTY DECORATOR (Decorator de propriedade) -------------------------
// Para o caso do property decorator são 2 parametros (target e key) na arrow function

function duracaoMinima (minLength: number) {
    // target -> neste caso, é o prototype da classe
    // key -> é a propriedade 
    return (target: any, key: string) => {
        // console.log("target --> " + target);
        // console.log("key --> " + key);

        let valor = target[key];
        const getter = () => valor;

        const setter = (duration: number) => {
            if(duration < minLength) {
                console.log(">>>>>>> ERRO! O tamanho mínimo é " + minLength);
            } else {
                valor = duration;
            }
        }

        Object.defineProperty(target, key, {get: getter, set: setter});

    }
}


class Musica {
    nomeDaMusica: string;

    // validando propriedade com decorator
    @duracaoMinima(30) // se for menor que 30 --> ERRO!
    duracaoEmSegundos: number

    constructor(nome: string, duracao: number) {
        this.nomeDaMusica = nome;
        this.duracaoEmSegundos = duracao;
    }
}

const musica1 = new Musica("Begin Again", 29) // criando com tempo menor que 30, logo -> Erro!
console.log(musica1.nomeDaMusica); // Begin Again
console.log(musica1.duracaoEmSegundos); // undefined



console.log("----------------------------------------------------------------- ");

// ----------------- METHOD DECORATOR (Decorator de método) -------------------------

// Decorator genérico de método para medir o tempo de execução!
// Para o caso do method decorator são 3 parametros (target, propertyKey e descriptor) na arrow function

function LogTempoExec() {
    return function(
        target: any, // é um construtor ou prototype da classe, por isso any
        propertyKey: string, // é o nome do método que foi decorado
        descriptor: PropertyDescriptor // tem uma referência para o método original
                                // dá acesso a implementação do método decorado através de descriptor.value.
    ) {
        // console.log(target);
        // console.log(propertyKey);
        // console.log(descriptor);
        
        const metodoOriginal = descriptor.value;

        // implementando o comportamento que se quer executar:
        descriptor.value = function(...args: any[]) {
            const tempo1 = performance.now(); // pega o tempo 1

            //guardando o retorno da chamada do método original:
            const retornoDoMetodoOriginal = metodoOriginal.apply(this, args);

            const tempo2 = performance.now(); // pega o tempo 2 
            console.log(`   Método decorado: ${propertyKey}`);
            console.log(`   Tempo de execução:  ${(tempo2 - tempo1)} ms...`);
            
            retornoDoMetodoOriginal; // retorna o retorno esperado do método original!

        }; 

        return descriptor;
    }
}


class Pessoa {
    private _nome: string;

    constructor (nome: string) {
        this._nome = nome;
    }

    @LogTempoExec()
    public imprimeRelatorio(): void { 
        console.log("              RELATÓRIO ");
        console.log("              TÍTULO "); 
        console.log("              subtítulo "); 
        console.log("              NOME_____________________________");
        console.log("              CONCLUSÃO");
    }

}


const pess1 = new Pessoa("Allan");
pess1.imprimeRelatorio(); // o method decorator vai rodar quando o método for chamado


console.log("----------------------------------------------------------------- ");

