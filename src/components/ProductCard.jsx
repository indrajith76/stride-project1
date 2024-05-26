import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[350px] w-full"
          src={item.imgUrl}
          alt="Nike Air Max 270"
        />
      </figure>
      <div className="card-body overflow-hidden relative">
        <h2 className="card-title">
          {item.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{item.description}</p>
        <div className="card-actions justify-between pb-2">
          <div>
            <strong>Brand :</strong>{" "}
            <span className="badge badge-neutral">{item.brand}</span>
          </div>
          <div>
            <strong>Price :</strong>{" "}
            <span className="badge badge-success text-white">
              ${item.price}
            </span>
          </div>
        </div>
        <button className="bg-gray-500 text-white py-1 absolute bottom-0 right-0 left-0 rounded-b-lg">
          <Link className="block" to={`/productDetails/${item.id}`}>See Details</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
