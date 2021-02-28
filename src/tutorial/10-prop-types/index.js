import React from "react";
import Product from "./Product";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const url = "https://course-api.netlify.app/api/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);

  return (
    <>
      <h2>Products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product}></Product>;
        })}
      </section>
    </>
  );
};

export default Index;
