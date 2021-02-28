import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch.js";

const url = "https://course-api.netlify.app/api/javascript-store-products";

const FetchExample = (params) => {
  const { loading, products } = useFetch(url);

  return (
    <>
      <h2>{loading ? "loading..." : "data"}</h2>
    </>
  );
};

export default FetchExample;
