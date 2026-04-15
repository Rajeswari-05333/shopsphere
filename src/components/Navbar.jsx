import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        background: "black",
        color: "white",
      }}
    >
      <h2>ShopSphere 🛍️</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart 🛒</Link>
        <Link to="/payment" style={{ color: "white" }}>Payment</Link>
      </div>
    </div>
  );
}

export default Navbar;