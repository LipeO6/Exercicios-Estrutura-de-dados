// Exerc. 1 -  Criar, verificar, adicionar e remover itens do SET

let numeros = new Set([1, 2, 3, 4 ,5]);
console.log(numeros.size);

numeros.add(5);
console.log(numeros);

numeros.delete(1);
console.log(numeros);

// Exerc. 2 - Converta um array para Set 

let frutas = ['maça', 'banana', 'maça', 'banana', 'laranja'];
let frutasUnicas = [new Set(frutas)];
console.log(frutasUnicas);


// Exerc. 3 - Criar um Set de 1 a 10, fazer um forEach para exibir os valores e verificiar se o 7 está presente.

let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numbers.forEach((number) => {
    console.log(`Número: ${number}`);
    
})

console.log(numbers.has((7)));

// Exerc. 4 - Escreva uma função p/ remover valores duplicados de um array usando set.

function removerDuplicatas(array) {
    return Array.from(new Set(array));
}

let nomes = ['José', 'Gabriel', 'Gilson', 'Ronaldo', 'José', 'Gilson'];
let nomesUnicos = removerDuplicatas(nomes);
console.log(nomesUnicos);


