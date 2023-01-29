import React from "react";

function CardProduct({ image, name, discount }) {
  return (
    <div className="products-container_images">
      <img
        className="product-image"
        src={`../../../assets/productsImages/${image}.JPEG`}
        alt=""
      />
      <p>{name}</p>
      <p>Descuento adicional {discount}%</p>
    </div>
  );
}

export default CardProduct;
