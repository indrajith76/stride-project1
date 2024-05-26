import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  return (
    <div class="container mx-auto p-4">
      <div class="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden flex">
        <img class="w-[50%]" src={data.imgUrl} alt="Sandals" />
        <div class="p-4 w-1/2">
          <h2 class="text-xl font-semibold mb-2">{data.title}</h2>
          <p class="text-gray-600 text-sm mb-4">Brand: {data.brand}</p>
          <p class="text-gray-700 font-medium mb-4">Price: ${data.price}</p>
          <p class="text-gray-600 mb-4">{data.description }</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
