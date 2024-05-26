import { async } from "@firebase/util";
import React from "react";
import Swal from "sweetalert2";

const Modal = ({ data, getAllProductHandler }) => {
  const { id, imgUrl, title, brand, price, description } = data;

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const imgUrl = form.imgUrl.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;

    const info = { id, imgUrl, title, brand, price, description };

    Swal.fire({
      title: "Are you want to update this product?",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Updated it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/shoes/${id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            getAllProductHandler();
            form.reset();
          });
        Swal.fire({
          title: "Updated!",
          text: "Your product has been updated.",
          icon: "success",
        });
      }
    });
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Edit Product</h3>
        <form
          onSubmit={handleUpdate}
          className="bg-white rounded pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              Product ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              name="id"
              type="text"
              placeholder="ID"
              defaultValue={id}
              disabled
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              defaultValue={title}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="brand"
              name="brand"
              type="text"
              placeholder="Brand"
              defaultValue={brand}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              name="price"
              type="text"
              placeholder="Price"
              defaultValue={price}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              placeholder="Description"
              defaultValue={description}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="imgUrl"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="imgUrl"
              name="imgUrl"
              type="text"
              placeholder="Image URL"
              defaultValue={imgUrl}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              onClick={() => document.getElementById("my_modal_3").close()}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
