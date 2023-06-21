// forma classica
function apresentar(nome) {
    return `meu nome e ${nome}`;
}

//arrowfunction
const apresentarArrow = nome => `meu nome e ${nome}`;
const soma = (num1, num2) => num1 + num2;
//caracteristicas: veio com ES6; Deixa o nosso codigo bem menor; Nao pode ser nomeada; Sempre vem com uma const e o nome da variavel

//arrowfunction com + de 1 linha de instrucao
const somaPequenosNumeros = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'somente numeros de 1 a 9'
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como funcao expressiva 
//quando usar: jeito rapido e curto de escrever a funcao; vantagens ao utilizar OBJETOS