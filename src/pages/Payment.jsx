import { useState } from "react";

function Payment() {
  const [method, setMethod] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment</h2>

      <select onChange={(e) => setMethod(e.target.value)}>
        <option value="">Select Payment Method</option>
        <option value="upi">UPI</option>
        <option value="card">Credit/Debit Card</option>
        <option value="cod">Cash on Delivery</option>
      </select>

      <br /><br />

      <a href="/success">
        <button disabled={!method}>Confirm Payment</button>
      </a>
    </div>
  );
}

export default Payment;