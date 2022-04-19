import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filterByNumericValues,
    setFilterByNumericValues,
    filterData,
    setFilterData,
  } = useContext(Context);
  const { column, comparison, value } = filterByNumericValues[0]; // desestruturando informações da do index 0 do array.
  const initialValue = Number(value); // para transformar o value em número.
  const [filterColumn, setFilterColumn] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']); // definindo as options do estado inicial.

  const filterDataResults = () => filterData.filter((planet) => { // foi trabalhado em cima do filterData e nn do data. O data apenas renderiza apenas o retorno da API.
    if (initialValue || initialValue === 0) { // verificando se o initialValue existe ou vale zero para fazer a filtragem
      if (comparison.includes('maior que')) {
        return (Number(planet[column]) > initialValue);
      }
      if (comparison.includes('menor que')) {
        return Number(planet[column]) < initialValue;
      }
      return Number(planet[column]) === initialValue;
    }
    return planet; // senão ele retorna o planet.
  });
  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (event) => setFilterByNumericValues([{
          ...filterByNumericValues[0], // recupera e mantém o estado no index 0 do array.
          column: event.target.value, // adiciona novos valores a chave.
        }]) }
      >
        { filterColumn.map((coluna) => ( // criando as options a partir do state.
          <option
            key={ coluna }
            value={ coluna }
          >
            { coluna }
          </option>)) }
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => setFilterByNumericValues([{
          ...filterByNumericValues[0], // recupera e mantém o estado no index 0 do array.
          comparison: event.target.value, // adiciona novos valores a chave.
        }]) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        data-testid="value-filter"
        onChange={ (event) => setFilterByNumericValues([{
          ...filterByNumericValues[0], // recupera e mantém o estado no index 0 do array.
          value: event.target.value, // adiciona novos valores a chave.
        }]) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilterColumn((prev) => prev.filter((valor) => valor !== column)); // prev garante que o estado será recuperado sem se perder nenhuma chave. Após recuperar o estado atual é feito o filter. Apenas os valores diferentes do column da chave do estado prev serão renderizados no novo array.
          setFilterData(() => filterDataResults());
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
