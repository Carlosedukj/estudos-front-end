//Números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal.
var exp = 2e10; // 20000000000, Precisão para até 15 digitos.


var total1 = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 3235265193 / 3;

console.log(total1, divisao, modulo)

// Operadores Aritméticos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// Lembrando que soma + em Strings serve para concatenar.

// Operadores Aritméticos (Strings)
var soma = '100' + 50; // 10050 
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
//É possível verificar se uma variável é NaN ou não com a função isNaN()

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN))

//NaN = Not a Number
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)


