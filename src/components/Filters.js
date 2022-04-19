import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function Filters() {
  const { setFilterByNumericValues } = useContext(Context);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  function handleChange(name, value) {
    setFilter({
      ...filter,
      [name]: value,
    });
  }

  return (
    <div className="filter-planet-container">
      <div>
        <select
          name="coluna"
          data-testid="column-filter"
          value={ filter.column }
          onChange={ ({ target }) => handleChange('column', target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </div>
      <div>
        <select
          name="operador"
          id="operador"
          data-testid="comparison-filter"
          value={ filter.comparison }
          onChange={ ({ target }) => handleChange('comparison', target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </div>
      <div className="input-container">
        <input
          type="number"
          data-testid="value-filter"
          value={ filter.value }
          onChange={ ({ target }) => handleChange('value', target.value) }
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => setFilterByNumericValues([filter]) }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Filters;
