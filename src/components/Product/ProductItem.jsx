function ProductItem({ product }) {
  return (
    <div className="p-5 text-center rounded-md bg-slate-800">
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductItem;
