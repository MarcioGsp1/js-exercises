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

//Escreva uma função que recebe dois números e retorna o resultado da soma entre eles.

function soma(n1, n2) {
  return n1 + n2;
}

soma(2, 4);

//Escreva uma função que recebe um número e retorna true se ele for par, e false caso contrário.

function parOuImpar(n) {
  return n % 2 === 0 ? `${n} É PAR` : `${n} É ÍMPAR`;
}

parOuImpar(72);

//Escreva uma função que recebe uma string e retorna a mesma string invertida.

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("Márcio");

//Escreva uma função que recebe um array de números e retorna o menor número encontrado.

function minArr(arr) {
  return Math.min(...arr);
}
minArr([3, 4, 21, 3, 20, 87, 99, 7, 77]);

//Escreva uma função que recebe um array de números e retorna a média entre eles.

function mediaArr(arr) {
  let valorArr = 0;
  for (i = 0; i < arr.length; i++) {
    valorArr += arr[i];
  }
  return valorArr / arr.length;
}
let media = mediaArr([12, 24, 21, 33, 20]);

console.log(media);

//Escreva uma função que recebe um array de números e retorna a soma entre eles.

function somaArr(arr) {
  let valorArr = 0;
  for (i = 0; i < arr.length; i++) {
    valorArr += arr[i];
  }
  return valorArr;
}
let result_ = somaArr([12, 22, 121, 34, 41]);

//Escreva uma função que recebe um array de números e retorna um novo array com os números ordenados em ordem crescente.

function cres(arr) {
  let newArr = arr.sort((a, b) => a - b);
  return newArr;
}

cres([12, 22, 121, 34, 41]);

//Escreva uma função que recebe um número e retorna o fatorial dele.

function fatorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}
console.log(fatorial(5));


//Crie duas variáveis x e y e compare se x é maior que y.

function getRandom(n) {
    return Math.floor(Math.random() * n);
  }
  
  x = getRandom(10);
  y = getRandom(10);
  
  x > y ? "X É MAIOR Y" : "X É MENOR Y";