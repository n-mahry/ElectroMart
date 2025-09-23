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
    image: "/images/iphone15.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    description: "512GB, Phantom Black, 200MP Camera",
    price: 1299,
    image: "/images/galaxy-s23-ultra.jpg"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    description: "Noise Cancelling, Wireless Bluetooth",
    price: 399,
    image: "/images/sony-wh1000xm5.jpg"
  },
  {
    id: 4,
    name: "MacBook Pro 16”",
    description: "M3 Max, 1TB SSD, Space Black",
    price: 2499,
    image: "/images/macbook-pro16.jpg"
  },
  {
    id: 5,
    name: "Dell XPS 15",
    description: "Intel i9, RTX 4070, 32GB RAM",
    price: 1999,
    image: "/images/dell-xps15.jpg"
  },
  {
    id: 6,
    name: "Apple iPad Pro 12.9",
    description: "M2 Chip, 256GB, Wi-Fi + Cellular",
    price: 1099,
    image: "/images/ipad-pro12.jpg"
  },
  {
    id: 7,
    name: "Nintendo Switch OLED",
    description: "Handheld Gaming Console, Neon Red/Blue",
    price: 349,
    image: "/images/nintendo-switch-oled.jpg"
  },
  {
    id: 8,
    name: "Sony PlayStation 5",
    description: "Next-gen console with DualSense controller",
    price: 499,
    image: "/images/ps5.jpg"
  },
  {
    id: 9,
    name: "Microsoft Xbox Series X",
    description: "4K Gaming, 1TB SSD, Ultra-fast load times",
    price: 499,
    image: "/images/xbox-series-x.jpg"
  },
  {
    id: 10,
    name: "Apple Watch Series 9",
    description: "GPS + Cellular, Midnight Aluminum Case",
    price: 499,
    image: "/images/apple-watch9.jpg"
  },
  {
    id: 11,
    name: "Beats Studio Buds",
    description: "True Wireless Noise Cancelling Earbuds",
    price: 149,
    image: "/images/beats-studio-buds.jpg"
  },
  {
    id: 12,
    name: "Razer Gaming Mouse",
    description: "High-precision, RGB Chroma Lighting",
    price: 89,
    image: "/images/razer-mouse.jpg"
  },
  {
    id: 13,
    name: "Logitech G915 Keyboard",
    description: "Wireless Mechanical Gaming Keyboard",
    price: 229,
    image: "/images/logitech-g915.jpg"
  },
  {
    id: 14,
    name: "Canon EOS R5 Camera",
    description: "45MP Full-Frame Mirrorless Camera",
    price: 3899,
    image: "/images/canon-r5.jpg"
  },
  {
    id: 15,
    name: "DJI Mini 3 Pro Drone",
    description: "4K Video, Lightweight, Foldable Design",
    price: 999,
    image: "/images/dji-mini3pro.jpg"
  },
  {
    id: 16,
    name: "GoPro Hero 12",
    description: "Waterproof Action Camera with 5.3K Video",
    price: 499,
    image: "/images/gopro-hero12.jpg"
  },
  {
    id: 17,
    name: "Amazon Echo Dot (5th Gen)",
    description: "Smart Speaker with Alexa",
    price: 59,
    image: "/images/echo-dot5.jpg"
  },
  {
    id: 18,
    name: "Google Nest Hub",
    description: "Smart Display with Google Assistant",
    price: 99,
    image: "/images/google-nest-hub.jpg"
  },
  {
    id: 19,
    name: "Apple AirPods Pro (2nd Gen)",
    description: "Wireless Earbuds with Active Noise Cancellation",
    price: 249,
    image: "/images/airpods-pro2.jpg"
  },
  {
    id: 20,
    name: "Anker PowerCore 20K",
    description: "Ultra-High Capacity Portable Charger",
    price: 59,
    image: "/images/anker-powercore20k.jpg"
  }
];


module.exports = products;
