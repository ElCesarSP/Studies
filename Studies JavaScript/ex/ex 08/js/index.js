let today = new Date( );

let year = today.getFullYear( );

var natal = new Date( year, 11, 25);

if(today.getMonth ( ) == 11 && today.getDate( ) > 25  ) {

    natal.setFullYear(natal.getFullYear( ) + 1 );
    console.log(natal);
}

// Calcular a diferença em dias entre os natais

let um_dia = 24 * 60 * 60 * 1000;
let newNatal = Math.ceil(( natal.getTime( ) - today.getTime( ) ) / um_dia, ) ;

console.log(`Faltam ${newNatal}, dias para o novo Natal! `)

// console.log(today);
// console.log(year);
// console.log(natal);
// console.log(today.getDate());
// console.log(today.getMonth());
//console.log( um_dia );
// console.log( newNatal );