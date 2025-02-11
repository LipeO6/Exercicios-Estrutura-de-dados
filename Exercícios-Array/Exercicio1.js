//Exerc. 1 - Criar um array, adicionar e remover itens e depois printar invertido

const array = [1, 2, 3, 4, 5];
array.push(6);
const removePrimeira = array.shift();
console.log(array);
const invertido = array.reverse();
console.log(array);

// Exerc. 2 Adicionar em primeiro e segundo um novo item e transformar em letras maiusculas

const arrayNomes = ['Fellipe', 'Julia'];
arrayNomes.push('Emily');
arrayNomes.unshift('Antonia');
console.log(arrayNomes);

const nomesMaiusculos = arrayNomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);

// Exerc. 3 Printar os array acima de 25 e soma-los 

const arrayNumeros = [10, 20, 30, 40, 50];
const arrayMaior = arrayNumeros.filter((indice) => indice > 25);
console.log(arrayMaior);
const arraySoma = arrayMaior.reduce((total, indice) => total + indice);
console.log(arraySoma);

// Exerc. 4 Todos os array ao quadrado numa função.

function eleveAoQuadrado(array) {
    const arrayAoQuadrado = array.map(indice => indice * indice);
    return arrayAoQuadrado;

}

const resultado = eleveAoQuadrado(arrayNumeros);
console.log(resultado);


// Fim dos exercicios básicos.
