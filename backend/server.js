import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import Cart from "./models/Cart.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.get("/cart-check", (req, res) => {
  res.send("Cart route working ✅");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("ShopSphere Backend is Running 🚀");
});

app.post("/add-products", async (req, res) => {
  try {
    const products = req.body;
    await Product.insertMany(products);
    res.send("Products Added Successfully ✅");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/add-sample", async (req, res) => {
  const sampleProducts = [
    {
      name: "iPhone 13",
      price: 70000,
      image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
      category: "Mobile",
      description: "Apple smartphone"
    },
    {
      name: "Samsung TV",
      price: 50000,
      image: "https://m.media-amazon.com/images/I/71LJJrKbezL._SL1500_.jpg",
      category: "Electronics",
      description: "Smart TV"
    }
  ];

  await Product.insertMany(sampleProducts);
  res.send("Sample Products Added ✅");
});

app.post("/cart", async (req, res) => {
  try {
    const item = req.body;
    const newItem = new Cart(item);
    await newItem.save();
    res.send("Item added to cart ✅");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/cart", async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching cart");
  }
});

app.get("/test-cart", async (req, res) => {
  const sample = {
    productId: "123",
    name: "Test Product",
    price: 1000,
    image: "https://via.placeholder.com/150",
    quantity: 1,
  };

  await Cart.create(sample);
  res.send("Cart saved ✅");
});

app.delete("/cart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.send("Item removed ✅");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/cart/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const quantity = Number(req.body.quantity);

    const updatedItem = await Cart.findByIdAndUpdate(
      id,
      { quantity: quantity },
      { new: true }
    );

    res.json(updatedItem);
  } catch (error) {
    console.log("PUT ERROR:", error);
    res.status(500).send(error);
  }
});

app.delete("/clear-cart", async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.send("Cart cleared ✅");
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});