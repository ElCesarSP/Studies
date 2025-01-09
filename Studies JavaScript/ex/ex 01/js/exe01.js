// Escreva um programa JavaScript para exibir o dia e hora atuais no seguinte formato
// Hoje é Domingo 
// O horário atual é 12h:22m:22s Pm

//pegar a data e o time atual

let today = new Date();

// pegar o dia da semana ( 0 - 6 ) 0 é domingo é sabado é 6

let day = today.getDay();

// Criar um array com os nomes do dias

let dayList = ['Domingo', 'Segunda-Feira' , 'Terça-Feira' , 'Quarta-Feira' , 'Quinta-Feira' ,
     'Sexta-Feira', 'Sábado' ];

// Pegar hora minutos e segundos

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

// Determina se Am ou Pm

let am_pm = (hour >= 12 ) ? 'Pm' : 'AM';

// Converte a hora de 24 para 12

hour = (hour >= 12 ) ? hour - 12 : hour ; 

// Checar se é 0 para 12 h Am
// Checar se é 0 Para 12 h Pm

if(hour === 0 && am_pm === 'PM' ){
    if( minute === 0 && second === 0 ){
        hour = 12;
        am_pm = 'Meio dia';
    }else{
        hour = 12;
        am_pm =' PM';
    }
}

if(hour === 0 && am_pm === 'AM' ){
    if( minute === 0 && second === 0 ){
        hour = 12;
        am_pm = 'Meio Noite';
    }else{
        hour = 12;
        am_pm =' AM';
    }
}

// Mostra horas atual

let msg = `Hoje é ${dayList[day]} <br>
o Horário atual é: ${hour}:hrs ${minute}:mn ${second}:sg ${am_pm}
`;
let el = document.getElementById('hora');
el.innerHTML = msg ; 


console.log(msg);