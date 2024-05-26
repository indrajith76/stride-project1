import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Modal from "../components/Modal";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [tempProduct, setTempProduct] = useState({});
  const [modalStatus, setModalStatus] = useState(false);

  const getAllProductHandler = () => {
    fetch("http://localhost:3000/shoes/")
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getAllProductHandler();
  }, []);

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/shoes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllProductHandler());
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-2xl my-10">All Products</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-gray-500 text-white">
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Description</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img className="w-10 h-10" src={item.imgUrl} />
                </td>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>${item.price}</td>
                <td>{item.description}</td>
                <td className="w-[140px]">
                  <button
                    className="btn btn-xs btn-success text-white"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                      setTempProduct(item);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHandler(item.id)}
                    className="btn btn-xs btn-error text-white ml-2"
                  >
                    Delete
                  </button>
                </td>
                <Modal
                  data={tempProduct}
                  getAllProductHandler={getAllProductHandler}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
