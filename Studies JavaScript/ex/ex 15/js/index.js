/**
 * Escreva um programa em JavaScript para
 * verificar um par de números e retornar verdadeiro
 * se dos números for 50 ou se soma for 50
 */

function verificar_num(y, x){
    return ((y == 50 || x == 50) || (y + x == 50 ));
}

console.log(verificar_num(10,50)); // true
console.log(verificar_num(20,30)); // true
console.log(verificar_num(2,48)); // true
console.log(verificar_num(29,30)); // false
console.log(verificar_num(52,-2)); // true

/*
let resulty = verificar_num( );
let text = document.getElementById('conteudo');
text.innerHTML = resulty;
*/