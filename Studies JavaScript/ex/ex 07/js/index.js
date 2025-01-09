/**
 * Escreva um programa JavaScript onde programa pega um número inteiro
 * Aleatório entre 1 e 10 e usuário é então solicitado a inserir
 * um número de estimativa. O programa exibe uma mensagem 
 * "Bom trabalho" se a entrada corresponder o número adivinhado,
 * caso ao contrário "Não corresponde"
 */

let numero = Math.ceil(Math.random( )  * 10);

//let numb = Math.random( ) * 10 ;

console.log(numero);
//console.log(numb);

let pedirNumber = prompt('Por gentileza, tente acerta um numero aleatório entre 1 e 10');

// console.log(pedirNumber);

if (pedirNumber == numero ){
    console.log( " Bom Trabalho ", pedirNumber );
}else{
    console.log( " Não corresponde " , pedirNumber);
}