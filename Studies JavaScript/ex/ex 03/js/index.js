// Escrever um programa JavaScript para obter a data atual
// Resultado esperado;
// mm-dd-yyyy, mm/dd/yyyy ou dd-mm-yyyy, dd-mm-yyyy

let today = new Date();

let day = today.getDate( );
// pega o mês 0 - janeiro | dezembro 11 ( somar mais 1 )
let month = today.getMonth() + 1;

let ano = today.getFullYear( );

if(dia < 10 ){
    dia = '0' + dia;
}

if(mes < 10 ){
    mes = '0' + mes;
}

today = `${month} - ${day} -  ${ano} `; // Americado
today = `${month} / ${day} / ${ano} `; // Americado
today = `${day} / ${month} / ${ano} `; // Brasileiro
today = `${day} - ${month} - ${ano} `; // Brasileiro

console.log(day);
console.log(month);
console.log(ano);
console.log(today);