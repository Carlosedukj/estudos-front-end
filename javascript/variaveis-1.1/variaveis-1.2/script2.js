// Inválido

// var §nome;  var nome, isso aqui § é um caractere especial, não vai funcionar.
// var function; var function, function é uma palavra reservada.
// var 1possuiFaculdade;  Começando com número também. UmPossuiFaculdade, não vai funcionar também.

// Válido

var $selecionar; //Selecionar, aqui com um cifrão, cifrão pode ser.
var _nome; //O underline também pode ser utilizado.
var possuiFaculdadeNoExterior; //PossuiFaculdadeNoExterior, também válido. Aqui, olha, usando aquela regrinhad o camelCase.

// --------------------------------------------------------------------------------------------------------\\
console.log(nome);
// Retorna nome is not defined
// E você tem que sempre declarar a variável. Se você estiver tentando falar que uma variável não existe, ele vai dizer que vai retornar que não é definido. Então ele vai dar um erro no teu console. 

//Mudar o valor atribuído

//É possível mudar os valores atribuídos a variáveis declaradas com ```var``` e ```let```. Porém não é possível modificar valores das declaradas com ```const```

var idade = 28; //Atribui o valor da variável idade como 28. Caso eu declare outra variável var idade = 29; o valor atribúido antes que era 28 deixa de 'existir', e o novo valor 29 que é chamado. VAR pode ser declarado mais de uma vez, como por exemplo var = cidade, país, bairro, rua;
idade = 29;

let preco = 50; // Atribui o valor da variável preco, como 50. LET não pode ser redeclarado dentro do mesmo escopo, ou seja caso eu declare outra variável let preco = 25; ela daria um erro pois ela não pode ser declarada mais de uma vez.
preco = 25;

const possuiFaculdade = true; // Você nunca vai querer modificar ele. Imagine que a constante fosse, a senha do usuário, logo percebemos que a CONST ela é única e não pode ser declrada novamente.
possuiFaculdade = false;
// Retorna um erro
