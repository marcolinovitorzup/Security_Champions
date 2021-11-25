# Code_Challenge - React

**Olá Zupper!**

Neste pequeno desafio, vamos propor um cenário e um problema e gostaríamos que você analisasse e comentasse como resolver o esse problema.

## Cenário
Uma imobiliária possuí um sistema de cadastro de novos imóveis que estão a venda.
Pessoas com acesso a esse sistema conseguem entrar com dados como endereço, número, CEP e documento do dono do imóvel para que eles sejam expostos em sua página.

## Problema
Dados dos clientes foram roubados. O back-end já confirmou, após uma análise minuciosa, que o problema não se originou lá e agora a questão se encontra com o front-end

## Resolução
Decida qual é o problema baseado no código no arquivo challengereact.js

## Solução

Os valores dos inputs estão sendo atribuídos automaticamente ao objeto de Data no momento em que o valor do input é mudado (onChange). Nós devemos evitar a injeção de conteúdos diretamente no DOM mas como isso foi feito devemos sanitizar os dados da atribuição usando o dompurify. Outro problema é que o desenvolvedor está armazenando informações diretamente em seu código. Para possuir informações sensíveis na aplicação seria necessário construir uma camada de orquestração entre o aplicativo e o recurso do back-end. 

Através do console do desenvolvedor um usuário malicioso poderia ter acesso a todos os dados que o usuário cadastrou e também interceptar a requisição ao back-end.
