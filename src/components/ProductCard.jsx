import BASE_URL from "../config";

function ProductCard({ product }) {

  const addToCart = async () => {
    try {
      await fetch(`${BASE_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        }),
      });

      alert("Added to cart ✅");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={product.image} alt="" width="100%" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button
        onClick={addToCart}
        style={{
          marginTop: "10px",
          padding: "8px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;