import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Filters() {
  const { filterByNumericValues,
    setFilterByNumericValues,
    filterData,
    setFilterData,
  } = useContext(Context);
  const { column, comparison, value } = filterByNumericValues[0];
  const initialValue = Number(value);
  const [filterColumn, setFilterColumn] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

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
        { filterColumn.map((coluna) => (
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
        onClick={ () => {
          setFilterColumn((prev) => prev.filter((valor) => valor !== column));
          setFilterData(() => filterDataResults())
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
