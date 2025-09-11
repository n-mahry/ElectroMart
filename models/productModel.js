// Placeholder for MongoDB schema (not active yet)
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
// Here products
const products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro",
    description: "256GB, Titanium, 5G Smartphone",
    price: 1199,
    image: "https://images.unsplash.com/photo-1696446535686-3db3b3d4f68a?w=800"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    description: "512GB, Phantom Black, 200MP Camera",
    price: 1299,
    image: "https://images.unsplash.com/photo-1606813902781-9c08930f26d1?w=800"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    description: "Noise Cancelling, Wireless Bluetooth",
    price: 399,
    image: "https://images.unsplash.com/photo-1613040605234-2cf7aa3b1a79?w=800"
  },
  {
    id: 4,
    name: "MacBook Pro 16”",
    description: "M3 Max, 1TB SSD, Space Black",
    price: 2499,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800"
  },
  {
    id: 5,
    name: "Dell XPS 15",
    description: "Intel i9, RTX 4070, 32GB RAM",
    price: 1999,
    image: "https://images.unsplash.com/photo-1601933471489-5e9f61f63c76?w=800"
  },
  {
    id: 6,
    name: "Apple iPad Pro 12.9",
    description: "M2 Chip, 256GB, Wi-Fi + Cellular",
    price: 1099,
    image: "https://images.unsplash.com/photo-1603398075563-bf9a445ee1f4?w=800"
  },
  {
    id: 7,
    name: "Nintendo Switch OLED",
    description: "Handheld Gaming Console, Neon Red/Blue",
    price: 349,
    image: "https://images.unsplash.com/photo-1629654297292-1e0c49ee8ac8?w=800"
  },
  {
    id: 8,
    name: "Sony PlayStation 5",
    description: "Next-gen console with DualSense controller",
    price: 499,
    image: "https://images.unsplash.com/photo-1606813903067-0d8e5026a756?w=800"
  },
  {
    id: 9,
    name: "Microsoft Xbox Series X",
    description: "4K Gaming, 1TB SSD, Ultra-fast load times",
    price: 499,
    image: "https://images.unsplash.com/photo-1609343005913-3f53bb6a8c86?w=800"
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    description: "GPS + Cellular, Midnight Aluminum Case",
    price: 499,
    image: "https://images.unsplash.com/photo-1601924582971-4bda9c9a7e89?w=800"
  },
  {
    id: 11,
    name: "Beats Studio Buds",
    description: "True Wireless Noise Cancelling Earbuds",
    price: 149,
    image: "https://images.unsplash.com/photo-1623776055684-94cb7ed2fba6?w=800"
  },
  {
    id: 12,
    name: "Razer Gaming Mouse",
    description: "High-precision, RGB Chroma Lighting",
    price: 89,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b7a7?w=800"
  },
  {
    id: 13,
    name: "Logitech G915 Keyboard",
    description: "Wireless Mechanical Gaming Keyboard",
    price: 229,
    image: "https://images.unsplash.com/photo-1595223714770-9d823ebf7d1c?w=800"
  },
  {
    id: 14,
    name: "Canon EOS R5 Camera",
    description: "45MP Full-Frame Mirrorless Camera",
    price: 3899,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800"
  },
  {
    id: 15,
    name: "DJI Mini 3 Pro Drone",
    description: "4K Video, Lightweight, Foldable Design",
    price: 999,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e55?w=800"
  },
  {
    id: 16,
    name: "GoPro Hero 12",
    description: "Waterproof Action Camera with 5.3K Video",
    price: 499,
    image: "https://images.unsplash.com/photo-1508898578281-774ac4893c0f?w=800"
  },
  {
    id: 17,
    name: "Amazon Echo Dot (5th Gen)",
    description: "Smart Speaker with Alexa",
    price: 59,
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800"
  },
  {
    id: 18,
    name: "Google Nest Hub",
    description: "Smart Display with Google Assistant",
    price: 99,
    image: "https://images.unsplash.com/photo-1620891549027-942a993a0863?w=800"
  },
  {
    id: 19,
    name: "Apple AirPods Pro (2nd Gen)",
    description: "Wireless Earbuds with Active Noise Cancellation",
    price: 249,
    image: "https://images.unsplash.com/photo-1585565302740-7a8d68c21979?w=800"
  },
  {
    id: 20,
    name: "Anker PowerCore 20K",
    description: "Ultra-High Capacity Portable Charger",
    price: 59,
    image: "https://images.unsplash.com/photo-1594381898411-846a9f613e5c?w=800"
  },
  // 👇 Continue adding until you reach 50
];

module.exports = products;
