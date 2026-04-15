import { useEffect } from "react";
import BASE_URL from "../config";

function Success() {

  useEffect(() => {
    fetch(`${BASE_URL}/clear-cart`, {
  method: "DELETE",
});
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Payment Successful ✅</h1>
      <p>Your order has been placed!</p>
    </div>
  );
}

export default Success;