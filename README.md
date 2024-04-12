# calendarioo
CODIGO HTML

- A primeira parte define a estrutura básica do documento HTML, incluindo a declaração do tipo de documento, a tag `<html>`, `<head>` e `<body>`.
 
- Na seção `<head>`, há meta tags para definir o conjunto de caracteres, a compatibilidade com o navegador e a largura da viewport. Também há links para um arquivo JavaScript chamado "calendario.js" e um arquivo CSS chamado "calendario.css".
 
- O título da página é definido como "Document".
 
- No corpo da página, há uma tabela com a classe "calendar" e o id "calendario", que representa o calendário. As células da tabela contêm os dias da semana e os dias do mês. Há também um `<select>` para escolher uma cor e um `<input>` para selecionar um dia.
 
- Abaixo do calendário, há um botão `<input type="submit" onclick="colorirDia()">`, que é uma função JavaScript chamada "colorirDia()" quando clicado.
 
- Além disso, há uma tabela com o título "tabela de veículos", que lista alguns tipos de veículos e suas cores correspondentes.
 
O JavaScript e o CSS referenciados contem o código que define o comportamento e o estilo do calendário, respectivamente.
tem menu de contexto

CODIGO JS

1. `let days = document.getElementById('day').value`: Isso obtém o valor inserido pelo usuário no campo de entrada com o id 'day', que representa o dia que o usuário deseja colorir.
 
2. `if (days < 1) { alert('Dia informado deve ser inteiro positivo'); }`: Verifica se o valor inserido é menor que 1. Se for, exibe um alerta informando que o dia deve ser um número inteiro positivo.
 
3. `else if (days >= 31) { alert('Escolha um dia entre 1 e 30'); }`: Verifica se o valor inserido é maior ou igual a 31. Se for, exibe um alerta informando que o usuário deve escolher um dia entre 1 e 30, pois o mês só tem até 30 dias.
 
4. `else { let color = document.getElementById('color').value; let calendar = document.getElementById('calendario'); let td = calendar.getElementsByTagName('td')[(parseInt(days))]; td.style.backgroundColor = color }`: Se o valor inserido estiver entre 1 e 30, a função continua. Ele obtém o valor selecionado no elemento de seleção de cor com o id 'color'. Em seguida, obtém a referência à tabela do calendário com o id 'calendario'. Depois, obtém todas as células da tabela (`<td>`) e seleciona a célula correspondente ao dia inserido pelo usuário. Por fim, define a cor de fundo da célula selecionada para a cor escolhida pelo usuário.