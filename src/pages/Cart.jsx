import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
          <div
            key={item.id}
            style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
            }}
            >
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            {/* 🔥 QUANTITY CONTROLS */}
            <div style={{ marginBottom: "10px" }}>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          {/* ❌ REMOVE */}
          <button onClick={() => removeFromCart(item.id)}>
            Remove ❌
          </button>
        </div>
      ))}

          {/* ✅ TOTAL */}
          <h3>Total: ₹{total}</h3>

          {/* ✅ PAYMENT BUTTON */}
          <Link to="/payment">
            <button
              style={{
                padding: "10px",
                marginTop: "10px",
                background: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Proceed to Payment
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;