//7 tipos de Dados
//Todos são primitivos exceto os objetos.

var nome = 'Carlos'; // String
var idade = 23; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//Primitivos são dados imutáveis


// Verificar tipo de Dado

var nome = 'Carlos';
console.log(typeof nome);
// retorna string

var nome = 'Carlos';
var sobrenome = 'Eduardo';
var nomeCompleto = nome + sobrenome;

console.log(nomeCompleto);


var gols = 1000;
var frase = 'Romário fez ' + gols + 'gols';
console.log(typeof frase) //Soma de número com uma string o resultado sempre será uma string.

var ano = 2018;
var mes = 8;
console.log(ano + mes);

var melhor = 'teste'
var frase1 = "Esse é \"melhor\" jogo";
console.log(frase1)

var gols = 1000
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2)