import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const productData = useLoaderData();
  return (
    <div className="container mx-auto mb-20">
      <h2 className="text-2xl my-10">All Products</h2>
      <div className="grid grid-cols-3 gap-10 mx-auto">
        {productData.map((item, idx) => (
          <ProductCard item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Products;
