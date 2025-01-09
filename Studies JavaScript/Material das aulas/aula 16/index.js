/**
 * Aula númerica de  imprecisão  |
 * 
 * Como converte o número em String .toString( );
 * number.toString() + // Nesse caso e salvo temporariamente como uma String
 * numer = number.toString( ); assim ja converte por valor real para String
 * 
 * Como conseguir o valor binário da expressão numerica .toString(2)
 * 
 * Como deixa um expressão númerica grande, arrendado .toFixed(2),  (2) seria quantas 
 * casas décimas que deseja ser expressada
 * 
 * Como saber que numero seria inteiro, .isInteger(variavel); , retornará um valor inteiro
 * 
 * Como saber que numero float (Flutuante), usando 
 * 
 * Como saber um valor e expressao numerica .isNaN, pode ocorrer que suas variavel
 * retorne valor inreal, nesse caso ela retorna com valor boolean (true, quer dizer  quer 
 * realizar um valor numerica), (false, quer dizer que valor não seria um valor numerico)
 * 
 * Como deixa valor de inprecisão com .parseFloat(), ou Number( )
 * num = ((num1 * 100) + (num2 * 100)) // 0.8
 * num = ((num1 * 100) + (num2 * 100)) // 0.9
 * 
 */

let num1 = 1; // Number
let num2 = 2.5; // Number

console.log(num1.toString() + num2.toString()); 
console.log(typeof num1 , typeof num2); 

/**
 * Usando troca de um numero |
 * 
 * Usar o metodo do .toString( )
 * esse metodo vai converte um number temporariamente para uma string 
 * 
 * Uso do .toFixed()
 * esse metodo esta arrendodando nosso valor exponencia
 * 
 * Usodo do .isInteger( )
 * esse metodo vai fazer um boolean e indentificar se nosso number é um numero inteiro
 * 
 * Uso do .isNaN( )
 * esse metodo vai verificar se nosso valores  vai realizar um conta, e nesse caso e boolean
 */

//let num1 = 10.5758551255547;
// let num2 = 2.5;

//num1 = num1.toString( ); // Observação esse modo vou esta converte o meu numero para um string
//permanentemente 

//console.log(num1.toString( )+ num2); // Assim so usaria temporáriamente 
//console.log(num1.toString( 2 )); // Assim vou exibir o numero em casa decimais
//console.log( typeof num1); // String 

//console.log(num1.toFixed(2)); // Nesse caso seria arrendodar nosso numero exponecia 

//console.log(Number.isInteger(num2)); // Esse metodo vai mostra se numero é inteiro ( e Booleano)

//let tem = num1 * `Ola`;
//console.log(Number.isNaN(tem)); // O Uso do isNaN ele verificara se nosso valores realizará um conta

