import React from "react";
import { Link } from "react-router-dom";
// Importaciones Assets
import picture from '../../assets/images/Foto New Collection.png'
// import sectionWomen from '../../assets/images/seccionMujer.png'
// import sectionMen from '../../assets/images/seccionHombre.png'


const HomePage = () => {
  return <section className="home-container">
    <section className="newCollection-home">
      <img src={picture} alt="Imagen Nueva Colleción" />
      <p>Nueva Colección</p>
      <h2>Primavera - Verano '26</h2>
      <p>Elementos esenciales de alta gama, diseñados para la persona moderna. Descubre una combinación de comodidad y lujo.</p>
      
    </section>
  </section>;
};

export default HomePage;
