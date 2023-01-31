import React, { useState, useEffect } from "react";

const SearchButton = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetch(`https://api.example.com/search?q=${searchTerm}`);
    const data = await result.json();
    setProducts(data.products);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className={`search-button ${
          windowWidth <= 600 ? "block-button" : "inline-button"
        }`}
      >
        Search
      </button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </form>
  );
};

export default SearchButton;
https://fakestoreapi.com/products
https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products