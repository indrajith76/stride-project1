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
        <div className="px-5 md:px-0 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
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

        <section className="py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-600 sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                Our commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <svg
                  className="w-16 h-16 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  High Quality
                </h3>
                <p className="text-gray-700 text-center">
                  We offer the best quality shoes made from premium materials.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <svg
                  className="w-16 h-16 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l1-2m1-2a4 4 0 016 0 4 4 0 016 0l1 2m1 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Secure Shopping
                </h3>
                <p className="text-gray-700 text-center">
                  Your data and transactions are safe with our secure payment
                  systems.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <svg
                  className="w-16 h-16 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2m2-4V5a2 2 0 012-2h8a2 2 0 012 2v9m-4 4h-4"
                  ></path>
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-700 text-center">
                  Get your shoes delivered to your doorstep in no time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-600 sm:text-4xl">
                Customer Testimonials
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Hear from our satisfied customers.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  "The shoes are incredibly comfortable and stylish. I wear them
                  every day!"
                </p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
                    alt="Customer 1"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-bold text-gray-900">
                      Jane Doe
                    </h4>
                    <p className="text-sm text-gray-600">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  "Excellent quality and fast delivery. Couldn't be happier with
                  my purchase."
                </p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
                    alt="Customer 2"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-bold text-gray-900">
                      John Smith
                    </h4>
                    <p className="text-sm text-gray-600">New York, NY</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  "Great service and fantastic shoes. Will definitely buy
                  again."
                </p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png"
                    alt="Customer 3"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-bold text-gray-900">
                      Sarah Lee
                    </h4>
                    <p className="text-sm text-gray-600">Chicago, IL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="join join-vertical w-full my-20">
        <h2 className="text-3xl text-center mb-10 font-extrabold text-gray-600 sm:text-4xl">
        Frequently Asked Questions
              </h2>
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
