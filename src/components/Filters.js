import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filterByNumericValues,
    setFilterByNumericValues,
    filterData,
    setFilterData,
  } = useContext(Context);
  const { column, comparison, value } = filterByNumericValues[0];
  const initialValue = Number(value);

  const filterDataResults = () => filterData.filter((planet) => {
    if (initialValue || initialValue === 0) {
      if (comparison.includes('maior que')) {
        return (Number(planet[column]) > initialValue);
      }
      if (comparison.includes('menor que')) {
        return Number(planet[column]) < initialValue;
      }
      return Number(planet[column]) === initialValue;
    }
    return planet;
  });
  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (event) => setFilterByNumericValues([{
          ...filterByNumericValues[0],
          column: event.target.value,
        }]) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => setFilterByNumericValues([{
          ...filterByNumericValues[0],
          comparison: event.target.value,
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
          ...filterByNumericValues[0],
          value: event.target.value,
        }]) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilterData(() => filterDataResults()) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
