# Code_Challenge - Kotlin

**Olá Zupper!**

Neste pequeno desafio, vamos propor um cenário e um problema e gostariamos que você descrevesse com suas palavras como resolver esse problema.

## Cenário
Em uma determinada Imobiliária existe um sistema com back-end em Kotlin/Micronaut para controle dos imóveis disponíveis.
Para aumentar o engajamento dos corretores, uma bonificação é paga mensalmente para aqueles que conseguirem cadastrar mais imóveis na plataforma.

O sistema possuí login por meio de autenticação com JWT. Existem três possíveis usuários da plataforma: Usuários (clientes), Corretores e Administrador

## Problema
Por algum motivo, um determinado corretor de uma hora pra outra, começou a ganhar todos os meses a bonificação. Um colega seu, confiante de que deveria conseguir
a bonificação em determinado mês, resolveu checar a quantidade de imóveis cadastrados que ele havia cadastrado e percebeu que um dos que havia cadastrado já não
existia na plataforma. Com isso resolveu falar com o Gerente, que então entrou em contato com a empresa que desenvolveu a plataforma.

## Resolução
Baseado no código abaixo, formule uma explicação do que pode ter ocorrido.

O Controller da API no arquivo challenge.kt

## Solução

Os métodos POST e DELETE podem ser acessados pelas mesmas ROLES ("ROLE_ADMIN", "ROLE_CORRETOR"). Em um exemplo o corretor Victor poderia cadastrar o Imóvel A e o corretor Eduardo poderia deletar o Imóvel A e recadastralo com o seu usuário para receber a bonificação. Considerando o nível de simplicidade do código eu adicionaria uma camada de autenticação OAuth2 para garantir uma maior segurança das requisições feitas pelos usuários. E também para poder manter um registro das ações feitas pelos usuários nos sistemas.

Com esse sistema de validação de usuário através do Oauth2, poderíamos adicionar uma validação no método DELETE para garantir que o corretor que está deletando o imóvel foi quem o cadastrou. Claro, partindo da premisa que o corpo da requisição de cadastro possua o id do corretor responsável pelo cadastro.

Basicamente isso seria feito para garantir que um corretor não possa deletar o imóvel de outro corretor e recadastralo para si mesmo.