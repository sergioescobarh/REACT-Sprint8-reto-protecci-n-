import React, { Component } from 'react';
import "../products/products.css";
class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            image:''
        };
    }
    list = (data) => {
        console.log(data);
    }
    apiCall(url,consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }
    componentDidMount(){
        console.log('me monté');
        this.apiCall('http://localhost:3001/products/list',this.list);
    }
    componentDidUpdate(){
        console.log('me actualizé');
    }
    
    render(){
    return (
        <div className="products-container_images">
            <img className="product-image" src="../../../assets/productsImages/1.png" alt="" />
            <img className="product-image" src="../../../assets/productsImages/2.png" alt="" />
            <img className="product-image" src="../../../assets/productsImages/3.png" alt="" />
            <img className="product-image" src="../../../assets/productsImages/4.png" alt="" />
        </div>
    );
}}

export default Products;
