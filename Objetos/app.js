//Crie um objeto vazio.

let obj = {};

//Crie um objeto que represente uma pessoa, com as propriedades nome, idade e profissão.

let pessoa = {
  nome: "Márcio",
  idade: 25,
  profissao: "Desenvolvedor front-end",
};

console.log(pessoa);

//Adicione uma propriedade "telefone" ao objeto criado no exercício 2.

pessoa.telefone = 99999999;

console.log(pessoa);

//Remova a propriedade "profissão" do objeto criado no exercício 2.

delete pessoa.profissao;
console.log(pessoa);

//Acesse o valor da propriedade "idade" do objeto criado no exercício 2.

pessoa.idade;

//Atualize o valor da propriedade "profissão" do objeto criado no exercício 2 para "Desenvolvedor Full-stack".

pessoa.profissao = "Desenvolvedor Full-stack";
console.log(pessoa);

//Crie um objeto que represente um carro, com as propriedades marca, modelo e ano.

let car = {
  marca: "Nissan",
  modelo: "GTR r35",
  ano: 2010,
};

console.log(car);

//Acesse o valor da propriedade "modelo" do objeto criado no exercício 7.

car.modelo;

//Crie um método para o objeto criado no exercício 7 que imprima a mensagem "Este carro é da marca X" (sendo X o valor da propriedade "marca").

let car1 = {
  marca: "Nissan",
  modelo: "GTR r35",
  ano: 2010,
  logMarca: function () {
    console.log(`Este carro é da marca ${this.marca}.`);
  },
};

car1.logMarca();

//Crie um array de objetos que represente uma lista de pessoas, cada objeto deve ter as propriedades nome, idade e profissão.

let lista = [
  {
    nome: "Julia",
    idade: 23,
    profissao: "Gerente de banco",
  },
  {
    nome: "Márcio",
    idade: 25,
    profissao: "Desenvolvedor front-end",
  },
  {
    nome: "Pablo",
    idade: 30,
    profissao: "Pescador",
  },
];

console.log(lista);
