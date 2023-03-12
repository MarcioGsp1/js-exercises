//Crie um array vazio.

let arr = [];

//Crie um array com os números de 1 a 10.

let arr1 = [1,2,3,4,5,6,7,8,9,10];

//Crie um array com os meses do ano.

let arrY = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro','outubro','novembro', 'dezembro'];

console.log(arrY);

//Adicione um elemento no final do array criado no exercício 2.

let arr1 = [1,2,3,4,5,6,7,8,9,10];

arr1.push('fim');

console.log(arr1)

//Remova o último elemento do array criado no exercício 3.

arrY.pop();

console.log(arrY)

//Adicione um elemento no início do array criado no exercício 2.

arr1.unshift(3);

console.log(arr1);

//Remova o primeiro elemento do array criado no exercício 3.

arrY.shift();

console.log(arrY);

//Retorne o tamanho do array criado no exercício 2.

arr1.length;

//Retorne o elemento de índice 5 do array criado no exercício 2.

console.log(arr1[4]);

//Ordene o array criado no exercício 2 em ordem decrescente.

arr1.sort((a,b) => b - a);

console.log(arr1);

//Crie um novo array que seja a concatenação dos arrays criados nos exercícios 2 e 3.

let newArr = arr1.concat(arrY);

console.log(newArr);

//Verifique se o valor 5 está presente no array criado no exercício 2.

arr1.includes(5);