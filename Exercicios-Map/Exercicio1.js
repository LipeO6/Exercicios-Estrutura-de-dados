// Exerc. 1 - Criar um map com produtos, valores e acessá-los através do forEach.

const produtos = new Map([
    ['Produto: Camiseta,', 'valor: R$ 44.99'],
    ['Produto: Bermuda,', 'valor: R$ 34.90'],
    ['Produto: Meia,', 'valor: R$ 14.90'],
]);

produtos.forEach((chave, valor) =>{
    console.log(`${valor} ${chave}`);
})

// //Exerc. 2 - Criar um map com nomes e acessá-los através do .get

const nomes = new Map([
    ['Nome 1', 'João'],
    ['Nome 2', 'Márcio'],
    ['Nome 3', 'Pedro'],
]);

console.log(nomes.get('Nome 2'));

// //Exerc. 3 - Criar um map p/ armazenar notas de alunos e após escrever uma função para calcular a média.

const notaAlunos = new Map([
    ['Nome: José', 8],
    ['Nome: Maria', 6],
    ['Nome: Carlos', 7],
    ['Nome: André', 9],
]);

function calculoMedias (notaAlunos) {
    let soma = 0;
    notaAlunos.forEach((nota, alunos) => {
    soma += nota;
});
    const totalAlunos = notaAlunos.size;
    const media = soma / totalAlunos;  
    return media;
} 

console.log(`A média é: ${calculoMedias(notaAlunos)}`);
