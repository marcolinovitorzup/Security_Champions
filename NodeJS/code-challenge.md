
# Code_Challenge - NodeJS

**Olá Zupper!**

Neste pequeno desafio, vamos propor um cenário e um problema e gostariamos que você analisasse e comentasse como resolver o esse problema.

## Cenário
Um desenvolvedor criou uma API para cadastro de usuários de uma plataforma.
O sistema utiliza NodeJS, Express, Sequelize e um banco Postgres para salvar dados do usuário cadastrado e tudo que é necessário é que seja passado um corpo com:

```
{
    "name":"Nome do usuário",
    "login":"Login do novo usuário",
    "senha":"Senha do usuário"
}
```

## Problema
Após uma vazamento do banco de dados, um hacker conseguiu ter acesso ao sistema e alterou sequestrou a conta de alguns desses usuários.

## Resolução
Identifique o que pode ter causado o problema, sabendo que:

- A aplicação utiliza HTTPs para comunicação entre o cliente e a API.

DTO que recebe o request do novo usuário:

```javascript
const md5 = require('md5')

class UserRequest {

    _name
    _login
    _password

    constructor(name, login, password) {
        this._name = name
        this._login = login
        this._password = md5(password)
    }

    model() {
        return {
            name: this._name,
            login: this._login,
            password: this._password
        }
    }
}

module.exports = UserRequest
```


Tela do banco de dados: 

![image](https://user-images.githubusercontent.com/90329628/141365554-585488de-831a-4610-b9ec-2127d161fd69.png)

## Solução

Primeiramente poderíamos implementar uma camada de autenticação JWT ou Oauth2 para aumentar o nível de segurança entre as requisições. Mas no caso o problema não foi esse. A senha está sendo trafegada sem a criptografia. E sendo criptografada apenas no momento que o JSON chega no construtor. Devido a isso, uma pessoa com intenções maliciosas poderia interceptar a requisição e ter em mãos usuário e senha. Podendo realizar login na plataforma e capturar as informações e registros que quisesse. E para mitigar ainda mais as vulnerabilidades do código, o desenvolvedor poderia
sobreescrever os métodos toString dos campos de login e password. Para diminuir as possibilidades de que essas informações sejam vazadas em logs
ou em outros processos.
