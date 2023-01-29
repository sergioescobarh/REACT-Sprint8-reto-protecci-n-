import React, { useState, useEffect } from "react";
import CardProduct from "../cardProduct/CardProduct";
import "../products/products.css";
function Products() {
  const [listProducts, setListProducts] = useState([]);
  // console.log(listProducts);
  const apiCall = async () => {
    await fetch("https://productsapi-production-d23f.up.railway.app/products/list", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      }

    })
      .then(response => response.json())
      .then((data) => setListProducts(data.data))
      .catch((error) => console.log(error));
  };

  // console.log(listProducts);

  useEffect(() => {
    apiCall();
  }, []);
  return (
    < div className="container-products-collection">
      
        {listProducts.map((product) => <CardProduct key={product.id} image={product.productImage} discount={product.discount} name={product.name}/>)}
      

    </div>
  );
}

export default Products;
