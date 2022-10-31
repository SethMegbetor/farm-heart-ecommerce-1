import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Fresh healthy vegetables</h2>
        <p>best organic farm products</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
