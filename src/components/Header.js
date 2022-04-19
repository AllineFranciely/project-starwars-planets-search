import React, { useContext } from 'react';
import Context from '../context/Context';

function Header() {
  const { setFilterByName } = useContext(Context); // trazendo a função de alteração de nome do provider.

  return (
    <header>
      <h1>Star Wars</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={
          (event) => setFilterByName({ name: event.target.value })
        }
      />
    </header>
  );
}

export default Header;
