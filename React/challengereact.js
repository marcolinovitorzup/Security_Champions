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
      eval(data.document + data.digit)
    };
    
    return (
      <table className="input-table">
        <tr>
          <td>
            <input
              type='text'
              name='document'
              placeholder='CPF/CNPJ sem digito'
              value={data.document}
              size="12"
              onChange = {(e) => handleType(e)}
            />-
            <input
              type='text'
              name='digit-document'
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
        <hr />
        <tr><td align="center">
        <button onClick={() => handleSubmit()}>Cadastrar</button>{' '}
        </td></tr>
      </table>
    );
  };
  
  export default UserInput;