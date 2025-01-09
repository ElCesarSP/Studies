/**
 * Escreva um programa em JavaScript para calcular
 * Cria minha funçao soma tripa 
 * soma tripo vai receum parameos
 * retornar o tripo da diferença absolutar se 
 * o número específico for maior que 19
 */

function som_tripo(numero1, numero2 ) {
    if(numero1 == numero2){
        return 3 * (numero1 + numero1 );
    }else{
        return (numero1 + numero2);
    }
}

let resultado = som_tripo(3, 3)

console.log(resultado);

/**var result = document.getElementById('conteudo');
result.innerHTML = resultado;*/