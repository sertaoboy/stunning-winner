// funcoes ajudam no desenvolvimento, uma vez que separa trechos de codigo com funcoes especificas, tornando-o menor e mais legivel
// alguns exemplos de funcoes ja definidas pelo proprio JavaScript:

        Math.round()// arredonda numeros de pontos flutuantes (decimais) para o inteiro mais proximo;
            Math.round(3.4)// retorna 3
            Math.round(3.85)// retorna 4
            Math.round(2.5)// retorna 3; quando o numero decimal tem 0.5 ele sempre arredonda para cima

        Math.ceil()// faz o arredondamento para o valor mais alto (ceil=teto)
            Math.ceil(5.2)// retorna 6
        
        Math.floor()// faz o arredondamento para o valor mais baixo (floor=piso)
            Math.floor(5.2)// retorna 5

        Math.trunc()// desconsidera os numeros decimais, "truncamento"
            Math.trunc(4.55234)// retorna 4

        Math.pow()// faz a exponenciacao de 2 numeros, como ao quadrado (2) ou ao cubo (3)
            Math.pow(4 , 2)// retorna 4^2=16
            Math.pow(2.5 , 1.5)// retorna 2.5^(3/2)=3.9528...
        
    
        Math.sqrt()// retorna a raiz quadrada de um numero
            Math.sqrt(64)// retorna 8
        
        Math.min()// retorna o menor valor dentre argumentos que serao atribuidos, ex:
            Math.min(0, 150, 30, 20, -8, -150)// retorna -150
        
        Math.max()// retorna o maior valor dentre argumentos que serao atribuidos, ex:
            Math.max(-200, -400, 1, 10, 50)// retorna 50
        
        Math.random()// retorna um valor randomico entre 0 e 1; nao teremos valor especifico a receber
            Math.random()// retorna 0.56245...
            Math.random()// retonra 0.99634...
            Math.random()// retorna 0.113415...







// para saber mais sobre funcoes MATEMATICAS: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description