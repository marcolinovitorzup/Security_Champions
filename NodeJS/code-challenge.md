# Code_Challenge - NodeJS

**Olá Zupper!**

Neste pequeno desafio, vamos propor um cenário e um problema e gostariamos que você descrevesse com suas palavras como resolver esse problema. 

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
const { hash } = require('bcrypt')
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
