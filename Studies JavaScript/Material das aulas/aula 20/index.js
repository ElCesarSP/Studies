/**
 * Criando objetor 
 * 
 * para criamos o nosso objeto usando {};
 */

/*
const pessoa1 = {
    nome: `Cesar`,
    sobreNome: `Santos`,
    Idade: 12
};

console.log(pessoa1.nome);
console.log(pessoa1.sobreNome);
console.log(pessoa1.Idade);
console.log(pessoa1);
*/

function criaPessoa ( nome, sobreNome, idade) {
    return{ nome, sobreNome, idade }; // isso seria uma função de facture ( Fabrica de argumento ) 
} // Isso parametro

const pessoa1 = criaPessoa(`César`,`Santos`,12) // Argumento , que enviamos um valor para o parametro
const pessoa2 = criaPessoa(`Paulo`,`Amaral`,23) // Argumento , que enviamos um valor para o parametro
const pessoa3 = criaPessoa(`Caio`,`Berteccur`,52) // Argumento , que enviamos um valor para o parametro
const pessoa4 = criaPessoa(`Joao`,`Batista`,19) // Argumento , que enviamos um valor para o parametro
const pessoa5 = criaPessoa(`Isa`,`Ferreira`,42) // Argumento , que enviamos um valor para o parametro

console.log(pessoa1,pessoa2,pessoa3,pessoa4,pessoa5);

const pessoa = {
    nick: `Cesar`,
    sobNome: `Santos`,
    idadeTotal: 12,

    fala( ) {
        console.log(`${this.nick} ${this.sobNome} está falando oi...`) // Nesse contexto usando o this, que seria o nosso objeto ( pessoa )
    },

    incrementarIdade ( ) {
        this.idadeTotal ++;
    },

    verIdade ( ) {
        console.log( ` A minha idade atual é ${this.idadeTotal}`)
    }
};

pessoa.fala( );

pessoa.verIdade( );
pessoa.incrementarIdade( ); 
pessoa.verIdade( );

pessoa.incrementarIdade( ); 
pessoa.verIdade( );

pessoa.incrementarIdade( ); 
pessoa.verIdade( );