const numb= Number(prompt('Digite um numero e vamos ver o que acontece? '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numb;

texto.innerHTML = ``;
texto.innerHTML += `<p>Raiz quadrada : ${numb ** 0.5}</p>`; 
texto.innerHTML += `<p>${numb} Raiz quadrada : ${Number.isInteger(numb)}</p>`; 
texto.innerHTML += `<p>Arrendodando para baixo: ${Math.floor(numb)}</p>`; 
texto.innerHTML += `<p>Arrendodando para cima: ${Math.ceil(numb)}</p>`; 
texto.innerHTML += `<p>É NaN : ${Number.isNaN(numb)}</p>`; 
texto.innerHTML += `<p>Com duas casas decimas: ${numb.toFixed(2)}</p>`; 


/*
document.body.innerHTML += `Raiz quadrada: <strong>${numb}</strong><br />`;
document.body.innerHTML += `<strong>${numb}</strong>É inteiro: <strong>${}</strong><br />`;
document.body.innerHTML += `<strong>${numb}</strong>É NaN: <strong>${}</strong><br />`;
document.body.innerHTML += `Arrendando para baixo: <strong>${Math.floor(numb)}</strong><br />`;
document.body.innerHTML += `Arrendando para cima: <strong>${Math.ceil(numb)}</strong><br />`;
document.body.innerHTML += `Com duas casa decimais: <strong>${numb}</strong><br />`;
*/