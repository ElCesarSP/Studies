function meuEscopo ( ) {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    pessoas = [ ];

    function recebeEventoForm (evento){
        evento.preventDefault ( );

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value ,
            sobrenome: sobrenome.value ,
            peso: peso.value ,
            altura: altura.value ,
        });

        resultado.innerHTML += `<p>Cliente: ${nome.value} ${sobrenome.value}, seu pesso é: ${peso.value}, a altura: ${altura.value}</p>`
        
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo( );