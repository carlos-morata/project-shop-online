import React from "react";
import { Link } from "react-router-dom";
// Importaciones Assets
import sectionWomen from '../../assets/images/seccionMujer.png'
import sectionMen from '../../assets/images/seccionHombre.png'
import video from '../../assets/videos/videoPrincipal.mp4'
import './HomePage.css'


const HomePage = () => {
  return <section className="home-container">
    <video src={video} muted autoPlay loop>
      <img src={sectionWomen} alt="Video no soportado" />
    </video>
  <h1>Bienvenida/o a Mi Tienda</h1>
  <p>Descubre la moda que te define. Calidad y estilo en cada prenda.</p>
  <section className="gender-section">
    <Link to='/mujer' className="gender-links">
      <figure className="gender-container">
        <img src={sectionWomen} alt="Moda Mujer" title="Moda de Mujeres" />
        <figcaption>Mujer</figcaption>
      </figure>
    </Link>

    <Link to='/hombre' className="gender-articles">
      <figure className="gender-container">
        <img src={sectionMen} alt="Moda Hombre"title="Moda de Hombres" />
        <figcaption>Hombre</figcaption>
      </figure>
    </Link>
  </section>

    <section className="who-section">
      <h2>Quiénes Somos</h2>
      <p>
        Somos una marca joven dedicada a traer las últimas tendencias a tu armario. Nacimos en 2018 con la misión de ofrecer moda sostenible y accesible para todos.
      </p>
    </section>
  </section>;
};

export default HomePage;
