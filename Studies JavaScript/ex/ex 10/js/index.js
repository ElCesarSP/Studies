/**
 * Escreva um programa em JavaScript para calcular
 * a soma dos dois numeros inteiro fornecidos,
 * se os dois valores forem iguais, retorne o tripo da soma
 */

function somaTripo (numeros1, numeros2) {

    if(numeros1 == numeros2){
        return 3 * (numeros1 + numeros2);
    }else{
        return (numeros1 + numeros2)
    }
}

console.log(somaTripo(10,12 ));