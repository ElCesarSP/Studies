/**
 * Dados Primitivos
 * 
 * Primitivos ( Imutáveis ) - String, Number, Boolean, UndeFined, Null ( bigint, symbol ) - 
 * Valores são cópiados
 * 
 * Referencia ( Mutavel ) - array, object, function - 
 * Passados por referencia
 */

/*
let a = `A`;
let b = a; // E uma Copia
console.log(a, b);

a = `Outra coisa`;
console.log(a, b);
*/

/*
let a = [1, 2 , 3];
let b = a ; 
console.log(a, b);

a.push( 4 );
console.log( a, b);

b.pop();
console.log(a, b)
*/

let a = [1, 2 , 3];
let b = [... a ] ; // assim já um copia do objetor a

const x = {
    nome: `Cesar`,
    soNome: `Santos`
};

//const y = x ; // valor por referencia
//const y = {... x } ; //copia do valor

x.nome = `Carlos` ;

console.log( x );
console.log( y );