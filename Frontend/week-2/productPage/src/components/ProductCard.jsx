    import React from "react";

    const ProductCard = ({ name, price, image }) => {
    return (
        <div className="w-60 h-50  bg-gray-100 rounded-lg shadow-md p-4 m-4 flex ">
            <div className="">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price.toFixed(2)}</p>
            </div>
        
        </div>
    );
    };

    export default ProductCard;
