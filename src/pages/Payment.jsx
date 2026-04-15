import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total || 0;

  const handlePayment = () => {
    
    navigate("/success");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Payment Page 💳</h1>
      <h2>Total Amount: ₹{total}</h2>

      <button
        onClick={handlePayment}
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;