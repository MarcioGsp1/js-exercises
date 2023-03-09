// Declarar uma variável chamada `myvar`, sem valor.

let myVar;

// Após declarada, atribua o valor 10 à variável `myvar`.

myVar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

soma++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3;

// Qual é o valor da variável `soma` até aqui?

72;

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

let souNinja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

let comida = ["arroz", "feijão", "ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

comida[1];

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).

soma === myVar;

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

myVar <= soma;

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(n1, n2) {
  return n1 / n2;
}

//Invoque a função criada acima, passando os parâmetros 10 e 2.

divisao(10, 5);

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function calc(n1, n2) {
  return n1 + n2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let result = calc(3, 2) + 5;

// Qual o valor atualizado dessa variável

10;

// Declare uma nova variável, sem valor.

let any;

/*Crie uma função que adicione um valor à variável criada acima, e retorne a string: O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.*/

function add() {
  any = 3;
  return `O valor da variável agora é ${any}`;
}

// Invoque a função criada acima.

console.log(add());

/*Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.*/

function mult(n1, n2, n3) {
  if (n1 == null || n2 == null || n3 == null) {
    return console.log("Preencha todos os valores corretamente!");
  } else {
    return n1 * n2 * n3 + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.

mult(2, 3);

//Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Preencha todos os valores corretamente!

//Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

mult(2, 3, 4);

//Qual o resultado da invocação acima?

26;

/*Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.*/

function valor(x, y, z) {
  if (arguments.length === 0) {
    return false;
  } else if (arguments.length === 1) {
    return x;
  } else if (arguments.length === 2) {
    return x + y;
  } else if (arguments.length === 3) {
    return (x + y) / z;
  } else {
    return null;
  }
}

/*Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
 */

valor(); //null
valor(1); //1
valor(2, 3); //5
valor(2, 3, 2); //2.5

//Escreva uma função que recebe um número e retorna seu dobro.

const double = (num) => num * 2;
double(3);

//Escreva uma função que recebe uma string e retorna seu tamanho.

function str(tamanho) {
  return tamanho.length;
}

str("Javascript");

//Escreva uma função que recebe um array de números e retorna o maior número.

function greater(arr) {
  return Math.max(...arr);
}
greater([2, 3, 8, 9, 7, 2]);

//Escreva uma função que recebe uma string e retorna a mesma string invertida.

function inverse(str) {
  return str.split("").reverse().join("");
}
inverse("Hello");
("olleH");

/* Escreva uma função que recebe um número e retorna true se ele for par e false se for ímpar. */

function parOuImpar(num) {
  if (num % 2 === 1) {
    return "FALSE";
  } else {
    return "TRUE";
  }
}

parOuImpar(3);

/*Escreva uma função que recebe dois parâmetros: um array e um elemento. A função deve retornar true se o elemento estiver presente no array e false caso contrário.*/

function estaNoArray(arr, ele) {
  if (arr.includes(ele)) {
    return "TRUE";
  } else {
    return "FALSE";
  }
}

estaNoArray([39, 023, 03, "maçã", "casa"], "casa");
estaNoArray([39, 023, 03, "maçã", "casa"], "boleto");
