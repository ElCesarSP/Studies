let data = new Date( );

let dai = data.getDay( );

let diaLista = ['Domingo', 'Segunda - Feira','Terça - Feira', 'Quarta - Feira', 'Quinta - Feira', 'Sexta - Feira', 'Sábado' ];

let horas = data.getHours( );
let minutos = data.getMinutes( );
let segundos = data.getSeconds( );

let amPm = (horas >= 12 ) ? 'Pm' : 'Am';

horas = ( horas >= 12 ) ? horas - 12 : horas ; 

if(horas === 0 && amPm === 'Pm'){
    if(minutos === 0 && segundos === 0){
        horas = 12;
        amPm = 'Meio dia';
    }else{
        horas = 12;
        amPm = 'Pm ';
    }
}

if(horas === 0 && amPm === 'Am'){
    if(minutos === 0 && segundos === 0){
        horas = 12;
        amPm = 'Meio noite';
    }else{
        horas = 12;
        amPm = 'Am';
    }
}

let msg = `Hoje é ${diaLista[dai]} <br>
O horário atual é: ${horas}:hrs ${minutos}:mn ${segundos}:sg ${amPm}
`;
let elemts = document.getElementById('hora');
elemts.innerHTML = msg ;