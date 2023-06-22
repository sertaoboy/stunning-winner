// declaracao de funcao da forma classica
function minhaFuncao(param) {
    //bloco de codigo
    return 'param'
}
minhaFuncao('param')
///////////////////////////////////////////////////////////

// expressao de funcao
const soma = function(num1, num2) {return num1 + num2}
console.log (soma(1, 1))
// parece a mesma coisa mas nem sempre e!
///////////////////////////////////////////////////////////
//diferencas: -nao possui um nome da funcao -> 'anonima' - criou-se uma const pra depois nao atribuir nenhum valor a ela podendo apagar o codigo da function
//    -encurta o codigo, a funcao fica localizada somente em uma linha, sem quebra.(boa pratica)
//////////////////////////////////////////////////////////

// diferenca principal ?????
console.log(apresentar()) // sem qualquer erro
function apresentar () {
    return 'ola'
}
console.log(somaDois(1, 1)) // erro de referencia
const somaDois = function(num1, num2) {return num1 + num2}
// diferenca: como a funcao foi atribuida a uma variavel (const). Lembrar que o javascript nao inicializa uma variavel a nao ser que tenha passado por ela alguma vez antes ----> EXCESSAO: declarando funcoes com nome, utilizando 'var' -> nesses casos o intepretador do js (node, no caso) vai passar pelo codigo e ler todas essas declaracoes no topo do codigo, para ai sim depois executar o nosso codigo. (HOISTING, do ingles, levantar)