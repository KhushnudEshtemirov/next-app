const ProductsPage = (props: {}) => {
  console.log(props);
  return <div>Products page</div>;
};

export default ProductsPage;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
