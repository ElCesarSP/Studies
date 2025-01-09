alert('Seja bem-vindo nosso sistema matematico.');

const nome = prompt('Digite seu nome ? ');
const anoNascimento = prompt('Digite sua data de nascimento ?');

const numero1 = prompt('Digite um número da sua perferencia. ');
const numero2 = prompt('Digite um outro número da sua perferencia. ');

numero1 = Number(numero1);
numero2 = Number(numero2);

const somatoria = (numero1 + numero2);

const idade = 2024 - anoNascimento;

alert(`Seu nome é ${nome}, Seja bem vindo sua idade é ${idade}, 
O valor que você escolheu a somatoria dele é ${somatoria}`);

console.log(typeof numero1, numero1);
console.log(typeof numero2, numero2);