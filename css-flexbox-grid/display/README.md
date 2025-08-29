<h1>Display</h1>
Fluxo do Layout:<br>

O fluxo do layout no HTML ocorre conforme o modo de escrita definido. Por padrão, de cima para baixo da esquerda para a direita.

span:<br>
Tag genérica que não possui nenhum estilo pré-definido/semântica. É equivalente a uma div, mas sem o display block.

![alt text](image.png)

----
Ao modificar o modo de escrita, o fluxo também é modificado.

![alt text](image-1.png)

esse vertical-lr, o lr significa left e right.

----

Display inline e block:<br>
Define como a caixa (box model) irá se comportar.

inline:<br>
Respeita o fluxo da escrita sem iniciar uma nova linha, não é possível definir valores de width, height, margin (top/bottom) e etc. É o estilo padrão.

block:<br>
Inicia uma nova linha e não permite que outros elementos sejam posicionados em sua linha. Aceita todas as propriedades do box model. Estilo inicial de elementos como h1, p, div e outros.

![alt text](image-2.png)

none e inline-block:<br>

none:<br>
Remove o elemento completamente da tela.

inline-block:<br>
O elemento continua inline, mas passa a receber as propriedades do box model.

![alt text](image-3.png) ![alt text](image-6.png) ![alt text](image-8.png)