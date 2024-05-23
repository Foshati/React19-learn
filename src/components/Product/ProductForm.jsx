function ProductForm({ onAdd }) {
  const formAction = async (formData) => {
    const newProduct = {
      title: formData.get("title"),
      price: formData.get("price"),
    };
    onAdd(newProduct);
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-200 w-80">
        <form action={formAction} className="card-body">
          <h2 className="flex justify-center text-2xl text-red-500">
            Action form react19
          </h2>

          <input
            placeholder="title"
            className="input input-bordered "
            name="title"
          />
          <input
            placeholder="price"
            className="input input-bordered "
            name="price"
          />
          <button type="submit" className="btn btn-neutral">
            add Products
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
