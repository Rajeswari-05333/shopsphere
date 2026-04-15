import { useEffect, useState } from "react";
import BASE_URL from "../config";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = () => {
    fetch(`${BASE_URL}/cart`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🔥 UPDATE QUANTITY FUNCTION
  const updateQuantity = async (id, newQty) => {
    if (newQty < 1) return;

    await fetch(`${BASE_URL}/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQty }),
    });

    fetchCart(); // refresh UI
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px 0",
              padding: "10px",
            }}
          >
            <img src={item.image} width="100" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            {/* 🔥 QUANTITY CONTROLS */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                ➖
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                ➕
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;