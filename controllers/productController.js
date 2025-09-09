// controllers/productController.js

const products = [];

// Generate sample products
const categories = ["Laptop", "Smartphone", "Headphones", "Monitor", "Keyboard", "Mouse", "Tablet", "Camera", "Speaker", "Smartwatch"];

let id = 1;
categories.forEach((cat, idx) => {
  for (let i = 1; i <= 5; i++) {
    products.push({
      id: id++,
      name: `${cat} Model ${i}`,
      price: Math.floor(Math.random() * 1500) + 50,
      description: `High-quality ${cat.toLowerCase()} with advanced features.`,
      image: `https://via.placeholder.com/200x150?text=${encodeURIComponent(cat + " " + i)}`
    });
  }
});

// Example: 10 categories × 5 each = 50 products

const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = { getProducts, getProductById };
