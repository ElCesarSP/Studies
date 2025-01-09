/**
 * Escreva um programa em JavaScript para
 * verificar se um determinado número inteiro
 * está entre 20 e 100 ou 400
 */

// Math.abs(x) ela retornar o valor absoluto de um número "x"

console.log(Math.abs("-1")); // 1
console.log(Math.abs(-2)); // 2
console.log(Math.abs(null)); // 0
console.log(Math.abs("")); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs([2])); // 2
console.log(Math.abs([2,3])); // NaN
console.log(Math.abs(undefined)); // NaN
console.log(Math.abs({})); // NaN
console.log(Math.abs('String')); // NaN 
console.log(Math.abs()); // NaN

function testeNumero (x)  {
    return (Math.abs(100 - x ) <= 20 || (Math.abs(400 - x) <= 20 ));
}

console.log(testeNumero(399));