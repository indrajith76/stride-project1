import React from "react";
import Banner from "../components/Banner";
import { useLoaderData, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />

      <div className="container mx-auto">
        <h1 className="my-20 text-center text-3xl font-bold">Our Products</h1>
        <div className="grid grid-cols-3 gap-y-10 mx-auto">
          {data
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .slice(0, 6)
            .map((item, idx) => (
              <ProductCard item={item} key={idx} />
            ))}
        </div>
        <div className="flex justify-center">
          <Link
            className="bg-gray-500 text-white py-1 px-10 rounded-lg my-16"
            to="/products"
          >
            See more
          </Link>
        </div>

        <div className="join join-vertical w-full my-20">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
