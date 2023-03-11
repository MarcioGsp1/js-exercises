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

// Crie uma variável x e atribua o valor 10. Crie outra variável y e atribua o valor 5. Faça uma operação que some x e y.

let x1 = 10;

let y1 = 5;

let soma_ = x1 + y1;

// Crie uma variável a e atribua o valor 15. Crie outra variável b e atribua o valor 8. Faça uma operação que subtraia a de b.

let a = 15;

let b = 8;

let sub = b - a;

// Crie uma variável c e atribua o valor 6. Crie outra variável d e atribua o valor 3. Faça uma operação que multiplique c por d.

let c = 6;

let d = 3;

let mult = c * d;

//Crie uma variável e e atribua o valor 10. Crie outra variável f e atribua o valor 2. Faça uma operação que divida e por f.

let e = 10;

let f = 2;

let div = e / f;

//Crie uma variável g e atribua o valor 15. Crie outra variável h e atribua o valor 4. Faça uma operação que calcule o resto da divisão de g por h.

let g = 15;

let h = 4;

let mod = g % h;

//Crie uma variável i e atribua o valor 3. Crie outra variável j e atribua o valor 2. Faça uma operação que calcule o valor de i elevado a j.

let i = 3;

let j = 2;

let tdp = i ** j;

//Crie uma variável k e atribua o valor 5. Crie outra variável l e atribua o valor 3. Faça uma operação que calcule o valor de k elevado a l.

let k = 5;

let l = 3;

let tdp2 = k ** l;

//Crie uma variável m e atribua o valor 5. Crie outra variável n e atribua o valor 3. Faça uma operação que calcule a raiz cúbica de m elevado a n.

let m = 5;

let n = 3;

let cb = Math.cbrt(m ** n);

//Crie uma variável o e atribua o valor 10. Crie outra variável p e atribua o valor 2. Faça uma operação que calcule a raiz quadrada de o elevado a p.

let o = 10;

let p = 2;

let resultado = Math.sqrt(Math.pow(o, p));

//Crie uma variável q e atribua o valor 10. Crie outra variável r e atribua o valor 3. Faça uma operação que calcule o valor absoluto da diferença entre q e r.

let q = 10;

let r = 3;

let ab = Math.abs(q - r);

//Crie uma variável s e atribua o valor 20. Crie outra variável t e atribua o valor 7. Faça uma operação que calcule o valor médio entre s e t.

let s = 20;

let t = 7;

let med = (s + t) / 2;

//Crie uma variável u e atribua o valor 3. Crie outra variável v e atribua o valor 5. Faça uma operação que calcule a diferença entre u e v e, em seguida, calcule o valor absoluto dessa diferença.

let u = 3;

let v = 5;

let dif = u - v;

let valorAbsoluto = Math.abs(dif);

//Crie uma variável w e atribua o valor 7. Crie outra variável x e atribua o valor 2. Faça uma operação que calcule o valor da divisão inteira de w por x.

let w = 7;

let x = 2;

let $result = Math.floor(w / x);

//Crie uma variável a1 e atribua o valor 5. Crie outra variável b1 e atribua o valor 7. Faça uma operação que calcule o valor máximo entre a1 e b1.

let a1 = 5;

let b1 = 7;

let max = Math.max(a1, b1);

// Crie uma variável "xl" e atribua a ela o valor 10. Em seguida, use o operador de atribuição aditiva para aumentar o valor de "xl" em 5.

let xl = 10;
xl += 5;

//Crie uma variável "y" e atribua a ela o valor 20. Em seguida, use o operador de atribuição subtrativa para diminuir o valor de "y" em 7.

let y = 20;
y -= 7;

// Crie uma variável "z" e atribua a ela o valor 30. Em seguida, use o operador de atribuição multiplicativa para multiplicar o valor de "z" por 2.

let z = 30;
z *= 2;

// Crie uma variável "w1" e atribua a ela o valor 40. Em seguida, use o operador de atribuição divisiva para dividir o valor de "w1" por 4.

let w1 = 40;
w1 /= 4;

// Crie uma variável "a2" e atribua a ela o valor 50. Em seguida, use o operador de atribuição modular para obter o resto da divisão de "a2" por 7.

let a2 = 50;
a2 %= 7;

//Crie uma variável "b2" e atribua a ela o valor 60. Em seguida, use o operador de atribuição binária à esquerda para deslocar os bits do valor de "b2" em 2 posições para a esquerda.

let b2 = 60;
b2 <<= 2;

// Crie uma variável "c1" e atribua a ela o valor 70. Em seguida, use o operador de atribuição binária à direita para deslocar os bits do valor de "c1" em 3 posições para a direita.

let c1 = 70;
c1 >>= 3;

// Crie uma variável "d1" e atribua a ela o valor 80. Em seguida, use o operador de atribuição binária sem sinal à direita para deslocar os bits do valor de "d1" em 4 posições para a direita.

let d1 = 80;
d1 >>= 4;

//Crie uma variável "e1" e atribua a ela o valor 90. Em seguida, use o operador de atribuição bit a bit AND para comparar o valor de "e1" com 15.

let e1 = 90;
e1 &= 15;

// Crie uma variável "f1" e atribua a ela o valor 100. Em seguida, use o operador de atribuição bit a bit OR para combinar o valor de "f1" com 200.

let f1 = 100;
f1 |= 200;

//Crie duas variáveis x e y e compare se x é maior que y.

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

x = getRandom(10);
y = getRandom(10);

x > y ? "X É MAIOR Y" : "X É MENOR Y";

//Crie duas variáveis a e b e compare se a é menor que b.

const n$ = (randomNumber) => Math.floor(Math.random() * randomNumber);

a = n$(15);
b = n$(15);

a < b ? "A É MENOR B" : "B É MENOR A";

//Crie duas variáveis p e q e compare se p é maior ou igual a q.

function getR(n) {
  return Math.floor(Math.random() * n);
}

p = getR(20);
q = getR(20);

p >= q
  ? `P (${p}) É MAIOR OU IGUAL A Q (${q})`
  : `P (${p}) NÃO É MAIOR E NEM IGUAL A Q (${q})`;

//Crie duas variáveis d2 e e2 e compare se d2 é diferente de e2.

let d2 = 10;
let e2 = "10";
e2 != d2;

//Crie duas variáveis f2 e g2 e compare se f2 é estritamente igual a g2.

let f2 = 12;
let g2 = "12";
f2 === g2;

//Crie duas variáveis h2 e i2 e compare se h2 é estritamente diferente de i2

let h2 = 14;
let i2 = "14";
h2 !== i2;

//Crie duas variáveis aa e bb e compare se aa é maior que bb e menor que 100.

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

let nx = 100;

let aa = getRandom(100);

let bb = getRandom(100);

aa > bb && aa < nx
  ? `${aa} É MAIOR QUE ${bb} E MENOR QUE ${nx}`
  : `${aa} NÃO É MAIOR QUE ${bb}, MAS É MENOR QUE ${nx}`;

//Crie duas variáveis ee e ff e compare se ee é igual a 10 e ff é estritamente igual a true.

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

let num = 10;

let ee = getRandom(100);

let ff = ee == num;

ee == num && ff === true
  ? `${ee} É IGUAL A ${num} E ${ff} É VERDADEIRO`
  : `${ee} NÃO É IGUAL A ${num}, E ${ff} NÃO É VERDADEIRO`;

/*Escreva um programa que solicita a idade do usuário e, se for maior ou igual a 18 anos, exibe a mensagem "Você é maior de idade". Caso contrário, exibe a mensagem "Você é menor de idade".*/

let age = prompt("Digite sua idade: ");

if (age >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

/*Escreva um programa que verifica se um número é positivo ou negativo. Se o número for positivo, exiba a mensagem "O número é positivo". Caso contrário, exiba a mensagem "O número é negativo".*/

let nn = -13;

if (nn < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é positivo");
}

/*Escreva um programa que solicita o nome de um usuário e verifica se ele é igual a "John". Se o nome for "John", exiba a mensagem "Olá, John! Bem-vindo de volta!". Caso contrário, exiba a mensagem "Olá, visitante!".*/

let nameUser = prompt("Digite seu nome: ");
let adm = "John";
if (nameUser === adm) {
  console.log("Olá, John! Bem-vindo de volta!");
} else {
  console.log("Olá, visitante!");
}

/*Escreva um programa que solicita um número inteiro e verifica se é par ou ímpar. Se o número for par, exiba a mensagem "O número é par". Caso contrário, exiba a mensagem "O número é ímpar".*/

let valor_1 = prompt("Digite um número: ");

if (valor_1 % 2 === 0) {
  console.log(valor_1 + " é par");
} else if (valor_1 % 2 === 1) {
  console.log(valor_1 + " é ímpar");
} else {
  console.log("O número digitado é inválido!");
}

/*
Escreva um programa que solicita a temperatura em Celsius e converte para Fahrenheit. Se a temperatura em Fahrenheit for maior ou igual a 90, exiba a mensagem "Está muito quente!". Caso contrário, exiba a mensagem "A temperatura está agradável".*/

let temp = prompt("Digite a temperatura em celcius: ");

let fahr = temp * 1.8 + 32;

if (fahr >= 90) {
  console.log("Está muito quente!");
} else {
  console.log("A temperatura está agradável");
}
