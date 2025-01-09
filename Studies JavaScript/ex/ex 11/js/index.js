/**
 * Escreva um programa em JavaScript para calcular
 * diferença absoluta entre um número especificado e 19.
 * retornar o tripo da diferença absolutar se 
 * o número específico for maior que 19
 */

function difenca_num(num) {
    if (num <= 19) {
        return (19 - num);
    }else{
        return (num - 19) * 3 ;
    }
}

console.log(difenca_num(29));