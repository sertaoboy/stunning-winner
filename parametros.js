function soma() {
    return (2 + 2);
}

console.log(soma())

// No exemplo acima ha uma funcao sem parametros (function soma()). Neste caso o "parametro" utilizado esta dentro do bloco de codigo da proprioa funcao, oque seria os dois numero na operacao de soma (2 + 2). Restringiria somente a operacao da soma de 2 + 2.



// Parametros de funcao
//      para realizar uma funcao de soma entre dois numeros de qualquer valor, neste exemplo, e necessario atribuir um parametro para a funcao soma.   ->   function soma(num1, num2)
//      Por exemplo:
function somaParametro(num1, num2) {
    return num1 + num2;
}
console.log(somaParametro(4, 4))
console.log(somaParametro(245, 20))

// Os parametros neste caso sao uteis para a funcao "reconhecer" o que e "num1" e "num2", que estao estabelecidos ao executar o console.log de somaParametro e atribuindo os valores desejados como PARAMETRO



// parametro vs argumento
//      podemos tratar como se fosse a mesma coisa, onde atribuimos um valor para determianda funcao ("intercambiaveis"); POREM, alguns atores tratam parametro ao declarar a funcao, e argumento quando ela e chamada.




// ordem dos parametros
//      Nestes exemplos de soma, pegando os valores de 245 e 20 respectivamente, existe uma ordem onde 245 e a variavel que se atribui ao valor do parametro "num1" e 20 onde e atribuida ao valor do parametro "num2"
//      Exemplo de ordem dos parametros com string:
function nomeIdade(nome, idade) {
    return `meu nome e ${nome} , tenho ${idade} anos.`;
}
console.log(nomeIdade("Raul", 24)) 




// Exemplos de funcao com parametro de multiplicacao:
function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(2, 2))
console.log(multiplica(somaParametro(1, 1), somaParametro(2, 2))) // obs na linha 46: reparar que se utiliza uma funcao (somaParametro) para definir o parametro que sera utilizado na funcao "multiplica", e so ai sera apresentado no terminal a soma de 1+1 com a soma de 2+2, e ai a multiplicacao de 2*4!!!!!!!!!!!!!

//observar o exemplo abaixo
console.log(multiplica(somaParametro(1, 1))) // o terminal retorna NaN -> porque a funcao "multiplica" espera receber DOIS parametros, e como nao foi passado o segundo param. ele atribui UNDEFINED -> logo, um numero * undefined nao e um numero -> NaN. Para evitar isso pode-se definir um VALOR PADRAO para algum parametro, observar exemplo abaixo
function multiplicaPadrao(numeroI = 1, numeroII = 1) {
    return numeroI * numeroII;
}
console.log(multiplicaPadrao(somaParametro(4, 5)))

//Boa pratica em funcoes -> passar poucos argumentos para cada funcao. "Se uma funcao tiver varios argumentos, provalvemente voce pode quebrar ela em varias funcoes menores."