import React from "react";
import ProductCard from "../components/ProductCard";
import Burger1 from "../assets/Green Torino.jpeg";
import Burger2 from "../assets/Smoke-Out.jpeg";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Burger",
      price: 10.99,
      image: Burger1,
    },
    {
      id: 2,
      name: "Burger2",
      price: 10.99,
      image: Burger2,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center w-full h-90 p-4">
      {products.map((product) => (
        <Link key={product.id}  to={`/product/${product.id}`}>
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
        </Link>
      ))}
    </div>
  );
};

export default Product;
