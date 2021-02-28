import React, { useState, useCallback, useMemo } from "react";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const url = "https://course-api.netlify.app/api/javascript-store-products";

const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(() => calculateMostExpensive(products), [
    products,
  ]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart : {cart}</h1>
      <h1>Most expensive: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart}></BigList>
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price /= 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name}></img>
      <h4>{name}</h4>
      <p>{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );
};

export default Index;
