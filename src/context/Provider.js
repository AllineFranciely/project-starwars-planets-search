import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]); // criação do estado.
  const [filterByName, setFilterByName] = useState({ name: '' }); // criando nova chave no estado.
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => { // renderiza na página 1 vez só o resultado da tela assim que ela carrega.
    const getAPI = async () => {
      const response = await fetch(url); // faz a chamada da API
      const { results } = await response.json(); // desestrutura para usar apenas a chavenecessária da API no formato json;
      setData(results); // a chave data do estado passa a ter o valor da promisse retornada.
    };
    getAPI();
  }, []);

  const valueContext = {
    data,
    filterByName,
    setFilterByName,
  };

  return (
    <Context.Provider value={ valueContext }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
