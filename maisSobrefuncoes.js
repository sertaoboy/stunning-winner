// exemplos de funcoes SEM retorno e Sem parametro; apenas executa a INSTRUCAO, sem qualquer necessidade de disponibilizar o resultado:

function cumprimentar () {
    console.log('oi pessoal')
}
cumprimentar()

function despedir () {
    console.log ('tchau gente')
}
despedir()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// exemplo de funcoes COM retorno, SEM parametro --> eh possivel combinar funcoes para que cada uma controle apenas uma parte do codigo e elas trabalhem juntas

function cumprimentarDois () { // **** erro que aconteceu: ao definir a funcao cumprimentarPessoa (nomePessoa), esqueci de colocar os parenteses da funcao cumprimentarDois (); o JS entendeu que "function cumprimentarDois" fosse uma string!!! ****
    return 'ola'
}

function cumprimentarPessoa (nomePessoa) {  
    console.log(`${cumprimentarDois()}, me chamo ${nomePessoa}`) // **** erro ao definir a funcao cumprimentarDois() **** -> descricao na linha 17
}
cumprimentarPessoa('Raul')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// funcao com RETURN e mais de um PARAMETRO -> lembrar que o js pode receber a quantidade de parametros necessaria, e os identifica pela ORDEM;   //   parametros
function operacaoMatematica (numI, numII, numIII) {
    return numI + numII + numIII
}
                              // argumentos
console.log(operacaoMatematica(10, 20, 30))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a PARAMETROS no momento em que a função é definida (no caso, numI, numII, etc) e ARGUMENTOS como os dados que utilizamos para executar a função (ou seja, 10, 20, etc)