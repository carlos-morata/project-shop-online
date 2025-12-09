import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
// Importaciones Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchProducts = () => {

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/');
    setSearchValue();
  }
  return <form onSubmit={handleSubmit} className="search-form">
    <input type="text" value={searchValue} placeholder="Buscador de Productos" />
    <button type="submit" className="search-btn">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </button>
  </form>;
};

export default SearchProducts;
