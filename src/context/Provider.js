import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]); // criação do estado.
  const [planets, setPlanet] = useState([]); // estado criado para não utilização do data no useEffect do filter, uma vez que o lint reclamou e ao usar a variável data novamente quebrava a aplicação.
  const [filterByName, setFilterByName] = useState({ name: '' }); // criando nova chave no estado.
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  ]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => { // renderiza na página 1 vez só o resultado da tela assim que ela carrega.
    const getAPI = async () => {
      const response = await fetch(url); // faz a chamada da API
      const { results } = await response.json(); // desestrutura para usar apenas a chavenecessária da API no formato json;
      setData(results); // a chave data do estado passa a ter o valor da promisse retornada.
      setPlanet(results); // alterando a chave olanets que será usada no filter.
    };
    getAPI();
  }, []); // função exacutada apenas 1 vez => [].

  useEffect(() => {
    const { column, comparison, value } = filterByNumericValues[0];
    const filtro = planets.filter((planet) => {
      if (comparison === 'menor que') {
        return Number(planet[column]) < Number(value);
      }
      if (comparison === 'maior que') {
        return Number(planet[column]) > Number(value);
      }
      return Number(planet[column]) === Number(value);
    });
    setData(filtro);
  }, [planets, filterByNumericValues]); // função exacutada qd o filter é alterado => [filtro alterado] nas dependências do que está contido em planets.

  const valueContext = {
    data,
    filterByName,
    setFilterByName,
    setFilterByNumericValues,
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
