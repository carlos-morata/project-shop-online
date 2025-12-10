import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ProductDetail = () => {
  const { gender, category, product_id } = useParams();
  const [ product, setProduct ] = useState([]);

  const [selectedSizes, setSelectedSizes] = useState("");

  // Si el Producto es talla única o no
  // const uniqueSizes = product.sizes.length > 0;

  useEffect(() => {
    const fetchProductId = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${gender}/${category}/${product_id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductId();
  }, [gender, category, product_id])

  // Manejar cambio
  const handleSizeChange = (e) => {
    setSelectedSizes(e.target.value);
    console.log("Talla elegida:", e.target.value);
  }

  return (
  <>
    {product.map((item) => (
    <section key={uuidv4()} className="productDetail-container">
      <img src={item.url_image} alt={item.description} title={item.name} />
      <h1>{item.name}</h1>
      <p>{item.price} €</p>
      <select value={selectedSizes} onChange={handleSizeChange}>
        <option value="" disabled> Elige tú Talla </option>
        {item.sizes.map((size) => (
          <option key={uuidv4()} value={size}>{size}</option>
        ))}
      </select>
      <button className="add-btn">Añadir al Carrito</button>
      <p>{item.description}</p>
    </section>
    ))}
  </>
  );
};

export default ProductDetail;
