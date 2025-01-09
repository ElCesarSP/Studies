function soma (x = 0 , y = 0) {
    const resultado = x + y ;
    return resultado;
};

console.log(soma(2 , 3)); // Number = 5 

function multiplic (x , y) {
    const resultado = x  *  y ;
    return resultado;
};

console.log(multiplic( 2 , 3)); // Number 6 

// nao posso pegar um variavel ou redeclara dentro foi

const raiz = function (n){
    return n ** 0.5;
};

console.log(raiz(25));