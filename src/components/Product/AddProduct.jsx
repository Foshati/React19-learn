import { useState } from "react";

import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

function AddProduct() {
  const [Products, setProducts] = useState([]);

  function addProductHandler(newProduct) {
    setProducts((products) => [...products, newProduct]);
  }

  return (
    <div>
      <ProductForm onAdd={addProductHandler} />
      <div className="flex flex-wrap justify-center max-w-xl gap-5 mx-auto my-10">
        {Products.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
}
export default AddProduct;
