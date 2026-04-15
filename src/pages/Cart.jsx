import { useEffect, useState } from "react";
import BASE_URL from "../config";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/cart`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart Data:", data);
        setCartItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;