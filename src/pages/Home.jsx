import { useState } from "react";
import Navbar from "../components/Navbar";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const categories = ["All", "Electronics", "Fashion", "Home Appliances", "Books"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(60000);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filter
  let filteredProducts = productsData
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    )
    .filter((product) => product.price <= maxPrice)
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // ✅ Sort
  if (sortOption === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>ShopSphere</h1>
        <p style={{ color: "gray", marginBottom: "20px" }}>
          Your one-stop shop for everything!
        </p>

        {/* 🔍 SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* 🧭 CATEGORY */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "8px 12px",
                border: "none",
                cursor: "pointer",
                background: selectedCategory === cat ? "#222" : "#eee",
                color: selectedCategory === cat ? "white" : "black",
                borderRadius: "5px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 💰 PRICE FILTER */}
        <div style={{ marginBottom: "20px" }}>
          <label>Max Price: ₹{maxPrice}</label>
          <br />
          <input
            type="range"
            min="0"
            max="60000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* 🔽 SORT DROPDOWN (FIXED POSITION) */}
        <div style={{ marginBottom: "20px" }}>
          <label>Sort By: </label>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">None</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
          </select>
        </div>

        {/* ✅ MODERN GRID (THIS IS WHAT YOU ASKED) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;