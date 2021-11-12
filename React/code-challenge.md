# Code_Challenge - React

**Olá Zupper!**

Neste pequeno desafio, vamos propor um cenário e um problema e gostaríamos que você analisasse e comentasse como resolver o esse problema.

## Cenário
Uma imobiliária possuí um sistema de cadastro de novos imóveis que estão a venda.
Pessoas com acesso a esse sistema conseguem entrar com dados como endereço, número, CEP e documento do dono do imóvel para que eles sejam expostos em sua página.

## Problema
Dados dos clientes foram roubados. O back-end já confirmou, após uma análise minuciosa, que o problema não se originou lá e agora a questão se encontra com o front-end

## Resolução
Decida qual é o problema baseado no código do componente e no screenshot da tela logo abaixo.

```javascript
import React, { useState } from 'react';

const UserInput = () => {
    const [data, setData] = useState({
      document: '',
      digit: '',
      address: '',
      postalCode: '',
      number: '',
      type: ''
    });
    
    const handleType = (e) => {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
    
    const handleSubmit = () => {
      try{
        if(data.document.length !== 9 && data.digit.length !== 2) {
            throw data.document + "numero CPF invalido e o digito também" + data.digit;
        }
        alert('Cadastrado com sucesso!')    
      }catch(e){
        eval(e);
      }
    };

    return (
      <table className="input-table">
        <tbody>
        <tr>
          <td>
            <input
              type='text'
              name='document'
              placeholder='CPF/CNPJ sem digito'
              value={data.document}
              size="12"
              onChange = {(e) => handleType(e)}
            />
            <input
              type='text'
              name='digit'
              placeholder='Digito'
              value={data.digit}
              size="5"
              onChange = {(e) => handleType(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              name='address'
              placeholder="Endereço"
              size="12"
              value={data.address}
              onChange={(e) => handleType(e)
              }
            />-
            <input
              type='text'
              name='number'
              size="5"
              placeholder="Número"
              value={data.number}
              onChange={(e) => handleType(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type='text'
              name='postalCode'
              placeholder="CEP"
              size="10"
              value={data.postalCode}
              onChange={(e) => handleType(e)}
            />
            <select>
              <option>Casa</option>
              <option>Apartamento</option>
            </select>
          </td>
        </tr>
        <tr><td align="center">
        <button onClick={() => handleSubmit()}>Cadastrar</button>{' '}
        </td></tr>
        </tbody>
      </table>
    );
  };
  
  export default UserInput;
```

