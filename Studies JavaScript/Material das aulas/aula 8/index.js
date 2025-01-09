const nome = 'César';
const sobrenome = 'dos Santos';
const idade = 25;
const peso = 82;
const alturaEmCm = 1.73; 
let anoNascimento = 2024 - idade;

let imc;
imc = peso / (alturaEmCm * alturaEmCm)

console.log(`${nome} ${sobrenome} tem ${idade} anos, peso ${peso}Kg.`);
console.log(`tem de altura ${alturaEmCm} e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)