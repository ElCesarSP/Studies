/**
 * Uso de array incial |
 * 
 * Os array são indesados, mas  são com, base de cada elemento que possuir dentro da array
 * ex: ['Luiz','César','Maria','João','Joani','Rauni','Alexandre'];
 * console.log(personal[ 1 ]); // César
 * 
 * posso editar o indicer da array, ex: 
 * personal [ 0 ] = `Eduardo`; 
 * 
 * posso criar  nesse caso um elemento ( variavel [ o indice ])
 *  que ainda nao existe na array, sendo adicionar depois do 
 * ultimo da array, ex :  personal [ 8 ] = `Eduardo`; 
 * 
 * como saber o tamanho do meu array usando o metodo .length
 * como adicionar de maneira mais aprimorada 
 *  personal[personal.length] = `Carlos`; 
 * usando esse metodo aplicara um novo indice no final da nossa 
 * array
 * 
 * possor adicionar de maneira mais organizada, .push
 * sempre adicionando no final da nossa array
 * personal.push(`Antonio`);  usando esse metodo aplicara um novo indice no final da nossa 
 * array
 * 
 * posso adicionar no começo da nossa array .unishift
 * personal.unshift(`Marcos`); 
 * 
 * Posso também remover elemento da nossa array .pop
 * ex: personal.pop(); removera o ultimo elemento da array
 * uma das caracteris ticas ela salva na memoria quem foi removido elemento
 * 
 * posso remover do começo seria metodo .shift()
 * personal.shift(); lembrando ele mexerá no indicer
 * 
 * Tem outro metodo ( delete variavel [  indicer ]; ) que posso remover elemento de um array
 * mas nesse caso o indicer que remover ficará vazio entendo podendo 
 * ser preenchido com um novo ou apenas ficando vazio
 * ex: delete variavel [ 1 ] ; // Cesar para <1 empty item > item vazio
 * 
 * Posso aponta um valor que ainda nao existe dentro da array [ indecer que nao foi gerado ]
 * console.log(personal [ 10000000000 ]) // vai volta undefined 
 * 
 * metodo de fatia nosso indicer de um array usando o .slice()
 * como funcionar, presumindo que nossa array tem 5 indicer e vocer que obter os valores da array
 * podemos usar de seguinte maneira
 * console.log(personal.slice( 0 , 4 )); nesse caso ele buscará todos indicer ate o indicer 3
 * sendo que o 4 ele ingnorá , mas podemos usar de modo negativo
 * console.log(personal.slice( 0 , -1 )); no modo negativo ele so vai ingnora o ultimo indicer da
 * nossa array nesse caso se possuir ate 30 indicer ele vai busca ate indicer 29 
 * 
 * Vendo ponto de vista quando falamos de array, consideramos que ele object
 * como saberemos que pode ser
 * let alunos = [ `cesar`, `maria`, `joao`]
 * console.log( typeof alunos) // assim vai volta object
 * ja quando saber se realmente é uma array
 * podemos usar 
 * console.log(alunos instanceof Array ) // se volta true e verdadeiro mas podemos efetuar a troca
 * na variavel e ele retorna um false
 */

const personal = ['Luiz','Cesar','Maria','João','Joani','Rauni','Alexandre'];

console.log(personal);