// destrurar os objetos
var pessoa = {
    nome: 'Ana',
    endereco: { rua: 'A', numero: 100}
};

var { endereco: { rua, numero, cep } } = pessoa;
console.log(rua, numero, cep);

var { conta: { numero, agencia } } = pessoa;
console.log(numero, agencia);
