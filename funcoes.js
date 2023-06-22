let x = ""
x = "oi";
//primeiro momento abaixo
//1) declaracao de funcao
function imprimeTexto(texto){      //Para declarar funcoes utiliza-se a palavra-chave "function", colocamos o nome (oque ela faz). Em seguida usamos "()" que se chama PARAMETRO. Entre {} se encontra um BLOCO de codigo
    console.log(texto);
}
//segundo momento abaixo
//2) executar a funcao (1 ou + vezes)
imprimeTexto(x);
imprimeTexto("outro texto");  // reparar que as funcoes podem ter diversas aplicacoes dependendo do codigo que sera escrito. Seguindo este exemplo notar que foi dada o atributo a "let" indefinido na 1a linha e na 2a se atribuiu o valor que na funcao "imprimeTexto" ela foi chamada.
// Reparar que na 11a linha tambem foi atribuido um dado (string) "outro texto" para exemplificar como as funcoes rodam.
//REAPROVEITAMENTO DE CODIGO; se pode utilizar a mesma funcao varias vezes durante o codigo, evitando a repeticao desse bloco de codigo varias vezes (oque seria mais trabalhoso)


// tres formas de escrever funcao: obs:funcao sem parametro
function soma(){   // Notar que neste exemplo a funcao nao recebeu qualquer parametro, diferente do 1o exemplo no qual o parametro seria a palavra "texto"
    const resultadoExemploI = 2 + 2
    return resultadoExemploI  // RETURN - em funcoes serve para neste exemplo retornar a soma de 2+2 para ai ser chamada na linha 22 atraves do console.log (funcao "imprimeTexto")
    // obs : a clausula "return" deve ser a ultima linha do bloco, para de fato retornar o que esta sendo especificado;; codigos escritos depois do retorno NAO SERAO EXECUTADAS!
}
soma()
imprimeTexto(soma())






// O que sao funcoes?
//    funcoes nos permitem que matenhamos algum codigo ISOLADO;  
//    sao trechos de codigo que separamos a declaracao para quando tenhamos que chamar

