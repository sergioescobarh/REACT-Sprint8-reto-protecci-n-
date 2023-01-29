import React from "react";
import "../cardProduct/cardProduct.css";


function CardProduct({ image, name, discount }) {
  return (
    <div className="products-container_images">
      <img
        className="product-image"
        src={`../../../assets/productsImages/${image}.png`}
        alt=""
      />
      <div className="container_name-discount">
        <p className="product-name">{name}</p>
        <h4 className="product-discount">Descuento adicional {discount}%</h4>
      </div>
    </div>
  );
}

export default CardProduct;
