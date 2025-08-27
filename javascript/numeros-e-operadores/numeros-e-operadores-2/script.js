//A ordem importa
//Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50 //Parênteses para priorizar uma expressão, ou seja ela prioriza os parênteses prmeiro.
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1)



//Operadores Aritméticos Unários
var incremento = 5;
x = x + 1;
console.log(incremento++); // 5, nesse caso os operadores ++ significam que é para somar com mais 1 totalizando no resultado 6 igual no cometário abaixo.
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
//Mesma coisa para o decremento --x

var y =  5;
y =y - 1;
console.log(y--) // 5, nesse caso os operadores -- significam que é para diminuir1 1 totalizando no resultado 4 igual no cometário abaixo.
console.log(y)// 4 



//Operadores Aritméticos Unários
//O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28'; // Posso adcionar o + ou o - antes das aspas que iria transformar essa string em um número.
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33, se o + não estivesse antes de idade, ele somaria como uma string, resultando no valor de 285, agora que ja que o + foi adicionado antes da idade ele soma como numero, ou seja 28 + 5 = 33. Se o - estivesse no lugar do + seria, 28 - 5 = 23.

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//O - antes de um número torna ele negativo


//Guia Completo de Operadores
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators