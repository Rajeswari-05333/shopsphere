import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav
      style={{
        backgroundColor: "#222",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>🛍️ My Store</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart 🛒 ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;