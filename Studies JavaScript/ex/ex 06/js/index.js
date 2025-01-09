/**
 * Escreva um programa em JavaScript para descobrir se 1 de janeiro será um domingo entre 2014 2050
 * Para descobrir quais anos entre 2014 e 2050 tem, de janeiro caindo em, domingo, podemos usar a seguinte abordagem
 * 
 * percorra cada ano entre 2014 e ate 2050 e verificar se 1 de janeiro desse ano cair em domingo
 * Para verificar se 1 de janeiro de ano e domingo, podemos usar o objetor Date em JavaScript. Crie um objetor para da 1 de janeiro de cada ano  e use metodos getDay
 * se o dia da semana for 0 (domingo), podemos imprir o ano
 */

// 0 e - domingo, 1 segunda... e sabado - 6

// 2014 2050

/**
 * new Date(year, monthIndex)
 * new Date(year, monthIndex, day)
 * new Date(year, monthIndex, day, hours)
 * new Date(year, monthIndex, day, hours, minutes)
 * new Date(year, monthIndex, day, hours, minutes, seconds)
 * new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
 */

for (let ano  = 2000; ano <= 2099; ano++){

    let diaDomingo = new Date(ano, 0, 1);

    if(diaDomingo.getDay() === 0 ){
       document.write(`É 01 de Janeiro no ano: ${ano} <br>`);
       //console.log(`Nesse data vai ser os dias do: ${diaDomingo} `)
    }
    
}



//let day = new Date(2024, 1, 5);
//console.log(day.getDay());