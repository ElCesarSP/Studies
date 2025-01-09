/**
 * Operadores Lógico |
 * 
 * && - > AND - > E (Sempre que usando o AND todos as expressões tem retonar true para validar true)
 * | | - > OR - > Ou 
 * ! - > NOT - > Não 
 * 
 */

// const expAnd = true && true && false && true ; // Todos tem ser true para return trues
// const expOr = false || false || false ;  // Quando todas as expressões return false vai ser false

/*
const user = 'César';
const passwr = '12345';

//                            True
const logffs = user === 'César';

//                           True                               False   = não vai permitir a ação
const logff = user === 'Luiz' && passwr === '12345';

//                            True                            True = vai permitir a ação
const logfff = user === 'César' || passwr === '1234';

*/

// ! usando o NOT = ele inverterá a nosso boolean

const vdd = true ; // False
const fac = false; // true

let neg = ! vdd;
let apr = ! fac;

console.log(neg); // false
console.log(apr); // true