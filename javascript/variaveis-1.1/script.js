//------------------------------------ Parte 01 -----------------------------------------------------------\\

var nome = 'Carlos'; //Atribui o valor da variável nome como Carlos. Caso eu declare outra variável var nome = Vitor; o valor atribúido antes que era Carlos deixa de existir, e o novo valor Vitor que é chamado. VAR pode ser declarado mais de uma vez, como por exemplo var cidade, país, bairro, rua; 
let idade = 23; // Atribui o valor da varial idade ,como 23. LET não pode ser redeclarado dentro do mesmo escopo, ou seja caso eu declare outra variável let idade = 28; ela daria um erro pois ela não pode ser declarada mais de uma vez.
const possuiFaculdade = true; // você nunca vai querer modificar ele. Imagine que a constante fosse, a senha do usuário, logo percebemos que a CONST ela é única e não pode ser declrada novamente.

console.log(nome, idade, possuiFaculdade)

//------------------------------------ Parte 02.1 ---------------------------------------------------------\\

//Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var nome = 'Carlos',
    anos = 28,
    temFaculdade = true;

//------------------------------------ Parte 02.2 ---------------------------------------------------------\\


var preco = 25; // Aqui declaramos a variável preco como 20.
var totalComprado = 5; // Aqui declaramos a variável totalComprado como 5.
var precoTotal = preco * totalComprado; // Aqui declaramos a variável precoTotal como o resultado da multiplicação (*) entre preco (20) e totalComprado (5).

console.log(precoTotal) //Aqui chamamos o resultado da multiplicação entre preco que é (25) e totalComprado que é (5), resultando no valor 125. para conferir basta ir no inspecionar no navegador.
 
//------------------------------------ Parte 02.2 ---------------------------------------------------------\\

//Pode declarar ela e não atribuir valor inicialmente.

var precoAplicativo; //A variável retorna undefined pois não atribuimos nem um valor a ela.
// retorna undefined