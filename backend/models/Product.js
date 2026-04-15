import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  description: String
});

const Product = mongoose.model("Product", productSchema);

export default Product;