import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Fresh healthy vegetables</h2>
        <p>best organic farm products</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
