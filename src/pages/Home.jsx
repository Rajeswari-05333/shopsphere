import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import BASE_URL from "../config";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      })
      .catch((err) => console.log("ERROR:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;