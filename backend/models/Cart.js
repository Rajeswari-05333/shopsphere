import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;