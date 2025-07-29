<h3>Tags Iniciais</h3>

A tag ```<a>```, marca um link.

A tag ```<p>```, marca um parágrafo.

As tags ```<h1></h1>```
```<h2></h2>```
```<h3></h3>```
```<h4></h4>```
```<h5></h5>```
```<h6></h6>```, marcam diferentes níveis de títulos.

<h1> Nível h1 
<h2> Nível h2
<h3> Nível h3
<h4> Nível h4
<h5> Nível h5
<h6> Nível h6

----------------------------------------------------------------------------------

```

Estrutura HTML

<!DOCTYPE html>
Indica o tipo de documento (html, xhtml e outros).

<html>
Representa a raiz do documento, é a tag que envolve todo o documento.

<head>
Informações gerais para o browser. Título, descrição e outras.

<title>
Título do documento.

<meta>
Dados extras sobre o documento.

<body>
Conteúdo do site, aqui escrevemos toda a estrutura do documento.
```

<h3>Exemplo:</h3>

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```

<h3>Caminho (path)</h3><br>
° Absoluto <br>

Exemplo: ```<a href="https://google.com">Google</a>```.
Usado para arquivos externos ao nosso site.

° Relativo <br>
Exemplo : ```<a href="/produtos/bicicletas.html">Bicicletas</a>```.
Usado para arquivos internos do site.

Caminho Relativo <br>
/index.html <br>
Arquivo index.html no diretório raiz /.

/produtos/bicicletas.html <br>
Arquivo bicicletas.html no diretório /produtos localizado na raiz.

index.html ou ./index.html <br>
Arquivo index.html no diretório atual ./.

../index.html <br>
Arquivo index.html um diretório anterior ao atual ../.

../../index.html <br>
Arquivo index.html dois diretórios anteriores ao atual.