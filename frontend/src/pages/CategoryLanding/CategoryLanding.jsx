import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import sectionWomen from '../../assets/images/seccionMujer.png'
import sectionMen from '../../assets/images/seccionHombre.png'
import './CategoryLanding.css'

const CategoryLanding = () => {
  const { genero } = useParams(); // Mujer / hombre
  const gender = genero;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/categorias/${gender}`)
        setCategories(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, [gender]);

  const isWoman = gender?.toLowerCase() === 'mujer';
  const heroImage = isWoman 
    ? sectionWomen
    : sectionMen;
    
  return <section className="gender-container">
    <img src={heroImage} alt={`Imagen para Sección ${gender}` }/>
    <h1>Sección {gender}</h1>
    <p>Descubre la mejor moda para {gender}.</p>

    <section className="btn-categories">
      <h2>Categorías de Productos</h2>
      {categories.map((item, index) => (
        <Link key={index} to={`/${gender}/${item.category.toLowerCase()}`}>
          <button key={index}>{item.category}</button>
        </Link>
      ))}
    </section>
  </section>;
};

export default CategoryLanding;