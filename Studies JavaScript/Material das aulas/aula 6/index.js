/**
 * Conceito de variaveis|
 * 
 * Variavel e valor que seria armazenado na memoria |
 * uma regrinha com boa pratica de programação seria cria variavel com nome |
 * especifico, e não podemos cria variavel com números, vias de regras com nomes |
 * não podemos cria nome de variavel com espaços, o correto nomes composto Usar |
 * ultilizamo camelCase o segundo nome composto seria inicializado com Letra Maiscúlas |
 * 
 * usando criação de varivel usando
 * let, podemos cria um variavel, e tambem podemo no declara no primeiro momento
 * agora não podemos redeclara ex: let nome = 'cesar'; / let nome = 'maria';
 * 
 * var, embora a var ja podemos redeclara, mais futuramente apresentaria um 
 * no nosso codigo não seria um boa pratica de programação
 * 
 * conts
 * 
 * nao podemos cria variveis resevadas (ex: let let = 'valor')
 * 
 * Não podemos criar variavel com palavras reservadas
 * Varáveis precisam ter nome significativos
 * Não pode começar o nome de variavel com um numero
 * Nào pode conter espaços ou traços
 * Case-sensitive
 * Não use var, usaremos sempre let
 */

let nome1 = 'César dos Santos';
let nome2 = 'Maria Consielo';
let nome3 = 'Eduardo Santos Consielo';
let data1 = 1999;
let data2 = 2018;
let data3 = 2020;
let data4 = 2023;

console.log(`${nome1} nasceu em ${data1}.`);
console.log(`Em ${data2} ${nome1} conheceu ${nome2}.`);
console.log(`${nome1} casou-se com ${nome2} em ${data3}.`);
console.log(`${nome2} teve 1 filho com ${nome1} em  ${data4}.`);
console.log(`O filho de ${nome1} se chama ${nome3}`);