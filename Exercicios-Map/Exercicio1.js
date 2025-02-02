// Exerc. 1 - Criar um map com produtos, valores e acessá-los através do forEach.

const produtos = new Map([
    ['Produto: Camiseta,', 'valor: R$ 44.99'],
    ['Produto: Bermuda,', 'valor: R$ 34.90'],
    ['Produto: Meia,', 'valor: R$ 14.90'],
]);

produtos.forEach((chave, valor) =>{
    console.log(`${valor} ${chave}`);
})

//Exerc. 2 - Criar um map com nomes e acessá-los através do .get

const nomes = new Map([
    ['Nome 1:', 'João'],
    ['Nome 2:', 'Márcio']
    ['Nome 3:', 'Pedro']
]);

