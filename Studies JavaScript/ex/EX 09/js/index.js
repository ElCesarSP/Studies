// URL split pop

//document.getElementById('conteudo').innerHTML = document.URL;

// usando metodo .split() podemos separa cada fase
let texto = 'O canal do curso do livro é mais facil de aprender na internet';
//console.log(texto.split(' '));

// metodo .pop()

let carro = [ 'Gol', 'Corrola', 'Creta', 'Uno'];
let carroPop = carro.pop( );
//console.log(carroPop);
//console.log(carro);

// split e pop

let img = 'nomeDaImg.jpeg';
let img2 = 'nomeDaImg.png';

let extensao = img.split('.').pop( );
let extensao2 = img2.split('.').pop( );
console.log(extensao);
console.log(extensao2);