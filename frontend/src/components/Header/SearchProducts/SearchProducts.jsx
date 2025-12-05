import React from "react";
// Importaciones Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchProducts = () => {
  return <form>
    <input type="text" />
    <button type="submit">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  </form>;
};

export default SearchProducts;
