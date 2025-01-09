// A cada 4 / 4 anos temos anos de 366 dias - comun 365

// Cria variavel ano

let ano = 2024;

// ( ano %  4 == 0  && ano % 100 !== 0 ) || (ano % 400 == 0 )

let verificar1 = ano % 4 ;
let verificar2 = ano % 100;
let verificar3 = ano % 400;

console.log(verificar1);
console.log(verificar2);
console.log(verificar3);

function anobissexto (ano) {
   if( ( ano %  4 == 0  && ano % 100 !== 0 ) || (ano % 400 == 0 )) {
    return 'É um ano bissexto! ';
   }else{
    return 'Não é um ano bissexto! ';
   }
}

var el = document.getElementById("bissexto");
el.innerHTML = anobissexto(2025) ;