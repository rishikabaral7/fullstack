import React from 'react'
import { useParams } from 'react-router-dom'
import Burger1 from "../assets/Green Torino.jpeg";
import Burger2 from "../assets/Smoke-Out.jpeg";

const ProductDetails = ({}) => {
  const {id} = useParams();
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
    const product = products.find((p)=> p.id === Number(id));
  




  return (
    <div className='flex px-40 py-40 gap-20'>
      <img src={product.image} className='w-130  ' alt={product.name} />
      <div className='flex flex-col gap-4'>

      <h1 className='text-7xl'>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button className='bg-blue-500 text-white py-2 px-4 rounded'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails