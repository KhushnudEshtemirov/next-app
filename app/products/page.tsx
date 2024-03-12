"use client";

import { useEffect } from "react";

const ProductsPage = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = "Products";
    }
  }, []);

  return <div>Products page</div>;
};

export default ProductsPage;
