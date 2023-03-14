/*2) Eescreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne 
uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
const numA = 3;
const numB = 4;

function fibonacci(n1, n2){
    let fibonacci = n1 + ' ' + n2
    let n3 = 0 
    let contador = 1
    while(contador <=5){
        n3 = n1 + n2
        n1 = n2
        n2 = n3
        fibonacci = fibonacci + ' ' + n3
        contador++

    }
    console.log(fibonacci)
    console.log("O numero ", numA, "pertence a sequencia")
  
}
fibonacci(numA, numB)
