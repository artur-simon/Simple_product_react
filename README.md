# Desafio | Frontend Developer

O projeto está disponível em: https://frontend-developer-challenge.artursimon.now.sh/

O desafio consistiu em analisar e reproduzir o seguinte layout https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/, estando atento a detalhes como espaçamento, tamanho e fonte. A página deveria ser funcional tendo links, processamento de requisição à API definida e validação de formulário.

Para isso, entrei em minha primeira aventura usando React, me surpreendi com os resultados que poucas linhas de código escrevi escrito pode proporcionar.

Dividi a página nas seguintes macro seções: Header, Products, Form e Footer.

No Header adicionei os textos de apresentação e criei um elemento separado para a barra de navegação.
No Products, adicionei o titulo da seção, e criei um elemento ProductCard que recebe todos os dados da API.
No Form implementei o formulário de newsletter com validação nos campos nome e email, a base para o envio das requisições foi implementada usando hooks do React.