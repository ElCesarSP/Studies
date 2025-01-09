// console.log('Helo World!')

// Defenir cada lado do nosso triangulo

let a = 4 ;
let b = 6 ;
let c = 9 ;

// calcular o semi-perimetro

let p = (a + b + c  ) / 2 ;

// Criar a formula de Heron - para calcula a area do triangulo com base (a.b.c)

let area = Math.sqrt(p * ( ( p - a ) * (  p - b ) * ( p - c ) ));

let elemts = document.getElementById('triangulo');
elemts.innerHTML = area ;
//console.log(area);