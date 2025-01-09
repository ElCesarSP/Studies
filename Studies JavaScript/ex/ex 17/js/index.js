/**
 * Escreva um programa em JavaScript para
 * criar uma nova string a partir de uma 
 * determinada string, alterando a posição do 
 * primeiro e do último caracteres. O comprimento
 * da string deve ser maior ou igual 1
 */

function frost_last(word) {
    if(word.length <= 1){
        return word;
    }

    let mid = word.substring( 1, word.length - 1);
    let start = word.charAt(0);
    let end = word.charAt( word.length - 1);

    return end + mid + start ;
}

console.log(frost_last('AB'));