const ProductsPage = () => {
  const products = getProducts();
  console.log("Hi");
  console.log(products);
  return <div>Products page</div>;
};

export default ProductsPage;

async function getProducts() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return data;
}
