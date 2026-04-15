import { useState } from "react";

function Payment() {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      window.location.href = "/success";
    }, 2000); // simulate payment
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Payment Page 💳</h1>

      <button
        onClick={handlePayment}
        style={{
          padding: "15px 30px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}

export default Payment;