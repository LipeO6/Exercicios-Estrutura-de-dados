//Exerc. 1

const array = [1, 2, 3, 4, 5];
array.push(6);
const removePrimeira = array.shift();
console.log(array);
const invertido = array.reverse();
console.log(array);

// Exerc. 2

const arrayNomes = ['Fellipe', 'Julia'];
arrayNomes.push('Emily');
arrayNomes.unshift('Antonia');
console.log(arrayNomes);

const nomesMaiusculos = arrayNomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

// Exerc. 3

const arrayNumeros = [10, 20, 30, 40, 50];
const arrayMaior = arrayNumeros.filter((indice) => indice > 25);
console.log(arrayMaior);
const arraySoma = arrayMaior.reduce((total, indice) => total + indice);
console.log(arraySoma);

// Exerc. 4

function eleveAoQuadrado(array) {
    const arrayAoQuadrado = array.map(indice => indice * indice);
    return arrayAoQuadrado;

}

const resultado = eleveAoQuadrado(arrayNumeros);
console.log(resultado);


// Fim dos exercicios básicos.
