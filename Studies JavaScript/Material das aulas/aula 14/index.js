/**
 * Aula de String é  = Um texto
 * 
 * '', "". `` 
 * como usar um caracter para escapar as aspas de uma variavel (\\) 
 * mode de usar seria barra invertida assim o caractere da string fica resavada
 * ex: "Um \"texto\" seria"";
 * 
 * Indice de caracteres = chatAt( );
 * let UmaString = "Um texto" (0,1,2,3,4,5,7); 
 * o indice mais exibir cada cacteres que possa existir na nossa String
 * como captura apena um elemento do nosso indice
 * console.log(UmaStriang [4]); // so vai ser exibido (e)
 * posso usar  também .chatAt(valor); 
 * caso conteça que pego um indice fora da nossa string, voltará um undeFiend
 * 
 * caso quero concatenar um indece de um string = .concat( );
 * Em JavaScript, a função concat() é um método de strings que permite combinar 
 * várias strings em uma só. A sintaxe básica é:
 * console.log(UmaString.concat('em ',' um ',' lindo dia.'));
 * let string1 = "Olá, ";
 * let string2 = "mundo!";
 * let resultado = string1.concat(string2);
 * console.log(resultado);
 * 
 * como encontra o indicer da nossa string = indexOf( valor );
 * O método indexOf é usado para procurar a posição (índice) de uma substring 
 * dentro de uma string. Ele retorna o índice da primeira ocorrência da substring, 
 * ou -1 se a substring não for encontrada.
 * Este método é comumente usado para verificar se uma string contém uma certa 
 * sequência de caracteres ou para encontrar a posição de uma parte específica de texto 
 * dentro de uma string.
 * let texto = "Olá, mundo! Olá, universo!";
 * let indice = texto.indexOf("Olá", 5);
 * console.log(indice);  // Saída: 14
 * 
 * 
 * Uma expressão regular (ou regex, do inglês regular expression) é uma sequência de caracteres que define um padrão de busca. 
 * Elas são amplamente usadas em programação e em ferramentas de processamento de texto para procurar, comparar e manipular 
 * strings de maneira poderosa e flexível.
 * O que é uma expressão regular?
 * Uma expressão regular descreve um padrão que pode ser usado para:
 * 
 * Encontrar substrings dentro de um texto.
 * Validar a conformidade de um texto com um formato específico.
 * Substituir partes do texto que atendem a um padrão.
 * Extrair informações que correspondem ao padrão desejado.
 * Exemplos de padrões com expressões regulares:
 * Padrão para um número de telefone: um formato de telefone como (XX) XXXXX-XXXX.
 * Padrão para um e-mail: para validar e-mails no formato nome@dominio.com.
 * Padrão para uma data: um formato como DD/MM/AAAA ou MM-DD-YYYY.
 * Sintaxe Básica das Expressões Regulares
 * Aqui estão alguns dos principais metacaracteres e conceitos usados em expressões regulares:
 * 
 * Caractere literal:
 * 
 * Qualquer caractere comum, como letras ou números, será tratado como um caractere literal.
 * Exemplo: "abc" irá procurar exatamente pela sequência "abc" na string.
 * Ponto (.):
 * 
 * O ponto representa qualquer caractere, exceto a quebra de linha.
 * Exemplo: "a.c" corresponde a "abc", "axc", "a1c", etc.
 * Asterisco (*):
 * 
 * O asterisco significa que o caractere anterior pode ocorrer 0 ou mais vezes.
 * Exemplo: "a*b" corresponde a "b", "ab", "aaab", etc.
 * Mais (+):
 * 
 * O sinal de mais significa que o caractere anterior deve ocorrer 1 ou mais vezes.
 * Exemplo: "a+b" corresponde a "ab", "aab", "aaab", mas não a "b".
 * Interrogação (?):
 * 
 * O ponto de interrogação significa que o caractere anterior é opcional (ocorre 0 ou 1 vez).
 * Exemplo: "a?b" corresponde a "b" e "ab".
 * Colchetes ([]):
 * 
 * Os colchetes definem uma classe de caracteres. Dentro dos colchetes, você pode especificar uma lista de caracteres permitidos.
 * Exemplo: "[aeiou]" corresponderá a qualquer vogal.
 * Exemplo 2: "a[bcd]e" corresponde a "abe", "ace", e "ade".
 * Caret (^):
 * 
 * Quando usado no início da expressão, o caret significa início da string.
 * Exemplo: "^abc" corresponde a uma string que começa com "abc".
 * Cifrão ($):
 * 
 * Quando usado no final da expressão, o cifrão significa fim da string.
 * Exemplo: "abc$" corresponde a uma string que termina com "abc".
 * Parênteses (()):
 * 
 * Os parênteses são usados para agrupamento e captura de parte do padrão.
 * Exemplo: "(ab)+c" corresponderá a "abc", "abababc", etc.
 * Pipe (|):
 * 
 * O pipe funciona como um "OU" lógico, ou seja, ele corresponde a qualquer uma das expressões separadas por ele.
 * Exemplo: "a|b" corresponde a "a" ou "b".
 * Chaves ({n,m}):
 * As chaves definem o número de repetições de um elemento.
 * Exemplo: "a{2,4}" corresponde a "aa", "aaa", ou "aaaa", mas não a "a" ou "aaaaa".
 * Exemplo de Expressão Regular
 * Digamos que queremos validar um número de telefone no formato (XX) XXXXX-XXXX, onde X é um dígito. A expressão regular seria:
 * 
 * regex
 * \(\d{2}\) \d{5}-\d{4}
 * Explicação:
 * 
 * \(: corresponde ao caractere de abertura do parêntese.
 * \d{2}: corresponde a dois dígitos numéricos (equivalente a [0-9]{2}).
 * \): corresponde ao caractere de fechamento do parêntese.
 * \d{5}: corresponde a cinco dígitos numéricos.
 * -: corresponde ao caractere hífen.
 * \d{4}: corresponde a quatro dígitos numéricos.
 * 
 * 
 * Em JavaScript, o método .replace() é usado para substituir parte de uma string por outra. Ele pode ser aplicado a qualquer 
 * string e aceita dois argumentos principais:
 * 
 * O que substituir: Pode ser uma substring ou uma expressão regular.
 * O que colocar no lugar: Pode ser uma string ou uma função que retorna a nova parte da string.
 * Sintaxe
 * string.replace(pattern, replacement);
 * 
 * Em JavaScript, o .length é uma propriedade usada para obter o tamanho de certos tipos de objetos, 
 * como arrays, strings, ou até mesmo alguns objetos personalizados. Ele retorna um número indicando o 
 * comprimento ou a quantidade de elementos.
 * Diferenças e Usos
 * Strings: Conta caracteres, ideal para verificar o comprimento de textos.
 * Arrays: Conta elementos, útil para loops ou manipulação de coleções de dados.
 * Outros: Pode ser definida manualmente para qualquer objeto, mas não terá funcionalidade automática como em strings ou arrays.
 * 
 * Em JavaScript, o método .slice() é usado para extrair uma parte de uma string ou de um array sem alterar o original. 
 * Ele retorna uma nova string ou um novo array contendo os elementos ou caracteres selecionados.
 * Comparação com Outros Métodos
 * .splice( ) (para arrays): Remove ou adiciona elementos e modifica o array original.
 * .substring( ) (para strings): Sem suporte a índices negativos, mas é semelhante ao slice( ).
 * 
 * Resumo
 * Imutável: Não altera o array ou string original.
 * Versátil: Funciona tanto com strings quanto com arrays.
 * Índices negativos: Permite trabalhar de trás para frente facilmente.
 * 
 * Em JavaScript, o método .split( ) é usado para dividir uma string em várias partes, com base em um delimitador especificado, 
 * e retorna essas partes como um array. Ele é muito útil para transformar strings em arrays.
 * Aplicações Comuns
 * Transformar uma string em array de palavras.\
 * Separar valores de uma lista formatada (como CSV).
 * Processar texto baseado em delimitadores como linhas ou espaços.
 * 
 * deixa um string toda maiscula .toUpperCase( );
 * deixa um string toda minusculas .toLowerCase( );
 * 
 */