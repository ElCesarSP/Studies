// Unsando if , else if , else

// If pode ser usado sozinho para cria 
// Sempre que utilizar a palavra else, preciso de um if antes 
// Posso ter varios else if nas check da minha condições
// So posso ter um else na check, mas tenho que finalizar minha condições
// Podemos usar condições sem precisar usar else if, apenas ( if, else )


/**
 * Exercicios de saudações 
 * entre 5 - 11 - Bom dia
 * entre 12 - 17 - Boa tarde
 * entre 18 a 23 - Boa noite
 */

const hora = 4.59; 

if (hora >= 5 && hora <= 11){
    console.log('Bom dia');
}else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
}else if (hora >= 18 && hora <= 23 ){
    console.log('Boa noite')
}else{
    console.log('Olá, desejamos um excelênte madrugada!')
}

const tenhoGrana = null;

if (tenhoGrana){
    console.log('Hoje vou sair de casa')
}else{
    console.log('Hoje, não vou pode sair de casa, estou "LISO"! ')
}