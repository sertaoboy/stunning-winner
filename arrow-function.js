// forma classica
function apresentar(nome) {
    return `meu nome e ${nome}`;
}

//arrowfunction
const apresentarArrow = nome => `meu nome e ${nome}`;
const soma = (num1, num2) => num1 + num2;
//caracteristicas: veio com ES6; Deixa o nosso codigo bem menor; Nao pode ser nomeada; Sempre vem com uma const e o nome da variavel

//arrowfunction com + de 1 linha de instrucao; obs: quando tem mais de 1 linha o "return" e "{}" sao obrigatorios(?)
const somaPequenosNumeros = (num1, num2) => { //como e uma soma de numeros pequenos tem que se passar uma condicao para isso (if;else), logo o return e necessario dependendo das condicoes 
    if (num1 > 9 || num2 > 9) {
        return 'somente numeros de 1 a 9'
    } else {
        return num1 + num2;
    }
}
console.log(somaPequenosNumeros(1, 9))
console.log(somaPequenosNumeros(23, 234))

// Hoisting: arrow function se comporta como FUNCAO EXPRESSIVA
//quando usar: jeito rapido e curto de escrever a funcao; vantagens ao utilizar OBJETOS