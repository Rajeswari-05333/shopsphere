import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  console.log("Context:", useContext(CartContext));
  
  return (
    <div
  style={{
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "0.3s",
  }}
>
  <img
    src={product.image}
    alt={product.name}
    style={{
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px"
    }}
    onError={(e) => {
    e.target.src = "https://via.placeholder.com/200";
    }}
  />

  <div style={{ padding: "10px" }}>
    <h3>{product.name}</h3>
    <p>₹{product.price}</p>
    <p>⭐ {product.rating}</p>

    <button
      onClick={() => addToCart(product)}
      style={{
        width: "100%",
        padding: "10px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Add to Cart
    </button>
  </div>
</div>
  );
}

export default ProductCard;