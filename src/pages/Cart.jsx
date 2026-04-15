import { useEffect, useState } from "react";
import BASE_URL from "../config";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Fetch cart data
  const fetchCart = () => {
    fetch(`${BASE_URL}/cart`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart Data:", data);
        setCartItems(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ Update Quantity
  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    await fetch(`${BASE_URL}/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });

    fetchCart(); // refresh
  };

  // ✅ Remove Item
  const removeItem = async (id) => {
    await fetch(`${BASE_URL}/cart/${id}`, {
      method: "DELETE",
    });

    fetchCart(); // refresh
  };

  // ✅ Total Price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
              }}
            >
              <img src={item.image} width="100" alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              {/* Quantity Controls */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity - 1)
                  }
                >
                  ➖
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(item._id, item.quantity + 1)
                  }
                >
                  ➕
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item._id)}
                style={{
                  marginTop: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          {/* Total Section */}
          <h2>Total: ₹{total}</h2>

          <button
            onClick={() => (window.location.href = "/payment")}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;