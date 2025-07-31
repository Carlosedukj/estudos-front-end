<h3>Link</h3> <br>
Link <br>
Cria uma relação entre um documento HTML e um arquivo de estilo CSS.<br>
<br>
rel <br>
Define o tipo de arquivo (stylesheet para CSS). É possível linkar outros também como favicons.<br>
<br>
href <br>
Define o caminho do arquivo.

```<link rel="stylesheet" href="/style.css" />```

-------

<h3> CSS Anatomia </h3><br>
Seletor <br>
Seleciona o elemento(s) que deve ser estilizado.<br>
<br>
Bloco CSS<br>
Engloba as propriedades {} que serão aplicadas ao seletor.<br>
<br>
Propriedade<br>
Define o que será alterador.<br>
<br>
Valor <br>
Define o valor do novo estilo.

----------------------------

<h3> Seletores </h3> <br>

h1, p <br>
A vírgula permite selecionarmos múltiplos elementos para a aplicação de um mesmo estilo. <br>

p a <br>
Seleciona o a que tiver um p como elemento pai (não precisa ser filho direto).


id <br>
Atributo HTML que adiciona um identificador ```único``` na tag. Esse identificar pode ser utilizado no CSS para selecionarmos o elemento: ```#nomeid``` 

class <br>
Atributo HTML que adiciona um identificador reutilizável na tag. Esse identificar pode ser utilizado no CSS para selecionarmos o(s) elemento(s): ```.classe```