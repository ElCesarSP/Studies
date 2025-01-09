/**
 * Escreva um programa em JavaScript para
 * calcular a diferença absoluta entre um número
 * especificado e 19, Retornar o tripo da diferença
 * absoluta se o numero especificado for maior que 19
 */

function gapAbsolut(numero) {
    if (numero<= 19) {
        return  (19 - numero );
    }else{
        return (numero - 19 ) * 3 ;
    }  
};

let resulty = gapAbsolut( 30 );
let text = document.getElementById('conteudo');
text.innerHTML = resulty;

//console.log(gapAbsolut(8));