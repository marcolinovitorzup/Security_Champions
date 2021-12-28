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

## Resposta
Para garantir a segurança, um corretor só poderá excluir um imóvel que ele mesmo tenha cadastrado. Por isso, todo imóvel deverá estar relacionado ao corretor.
Lembrando que a exclusão deverá ser apenas lógica por motivos de auditoria e, caso seja feito o cadastro do mesmo imóvel, então este deverá ser versionado. Pode-se adotar também a não permissão de excluir pelo corretor, devendo este solicitar ao admin que o faço, para evitar que ocorra a mesma situção.
