// ElectroMart - products with reliable images (Picsum seeds so links always work)
const products = [
  { id:1,  name:"Apple iPhone 15 Pro", price:1199, image:"https://picsum.photos/seed/iphone15/600/400" },
  { id:2,  name:"Samsung Galaxy S24 Ultra", price:1299, image:"https://picsum.photos/seed/galaxyS24/600/400" },
  { id:3,  name:"Google Pixel 8 Pro", price:999, image:"https://picsum.photos/seed/pixel8/600/400" },
  { id:4,  name:"OnePlus 12", price:899, image:"https://picsum.photos/seed/oneplus12/600/400" },
  { id:5,  name:"Xiaomi 14 Pro", price:799, image:"https://picsum.photos/seed/xiaomi14/600/400" },

  { id:6,  name:"MacBook Air M3", price:1399, image:"https://picsum.photos/seed/macbookair/600/400" },
  { id:7,  name:"Dell XPS 15", price:1799, image:"https://picsum.photos/seed/dellxps15/600/400" },
  { id:8,  name:"HP Spectre x360", price:1599, image:"https://picsum.photos/seed/hpspectre/600/400" },
  { id:9,  name:"Lenovo ThinkPad X1", price:1699, image:"https://picsum.photos/seed/thinkpadx1/600/400" },
  { id:10, name:"ASUS ROG Zephyrus G14", price:1899, image:"https://picsum.photos/seed/zephyrusg14/600/400" },

  { id:11, name:"PlayStation 5", price:499, image:"https://picsum.photos/seed/ps5/600/400" },
  { id:12, name:"Xbox Series X", price:499, image:"https://picsum.photos/seed/xboxseriesx/600/400" },
  { id:13, name:"Nintendo Switch OLED", price:349, image:"https://picsum.photos/seed/switcholed/600/400" },
  { id:14, name:"Steam Deck OLED", price:649, image:"https://picsum.photos/seed/steamdeck/600/400" },
  { id:15, name:"Meta Quest 3 VR", price:499, image:"https://picsum.photos/seed/quest3/600/400" },

  { id:16, name:"AirPods Pro (2nd Gen)", price:249, image:"https://picsum.photos/seed/airpodspro/600/400" },
  { id:17, name:"Sony WH-1000XM5", price:349, image:"https://picsum.photos/seed/sonyxm5/600/400" },
  { id:18, name:"Bose QC45", price:329, image:"https://picsum.photos/seed/boseqc45/600/400" },
  { id:19, name:"Beats Studio Pro", price:299, image:"https://picsum.photos/seed/beatsstudio/600/400" },
  { id:20, name:"JBL Charge 5", price:149, image:"https://picsum.photos/seed/jblcharge5/600/400" },

  { id:21, name:"LG UltraGear 27”", price:399, image:"https://picsum.photos/seed/lgultragear/600/400" },
  { id:22, name:"Samsung Odyssey G9", price:1399, image:"https://picsum.photos/seed/odysseyg9/600/400" },
  { id:23, name:"Dell UltraSharp 32”", price:1099, image:"https://picsum.photos/seed/dellultrasharp/600/400" },
  { id:24, name:"ASUS TUF 27”", price:299, image:"https://picsum.photos/seed/asustuf/600/400" },
  { id:25, name:"BenQ EX3501R", price:599, image:"https://picsum.photos/seed/benqex3501/600/400" },

  { id:26, name:"Logitech MX Master 3S", price:99, image:"https://picsum.photos/seed/mxmaster3/600/400" },
  { id:27, name:"Razer BlackWidow V4", price:179, image:"https://picsum.photos/seed/blackwidow/600/400" },
  { id:28, name:"Corsair K70 RGB", price:159, image:"https://picsum.photos/seed/k70rgb/600/400" },
  { id:29, name:"Elgato Stream Deck MK2", price:149, image:"https://picsum.photos/seed/streamdeck/600/400" },
  { id:30, name:"Logitech Brio 4K", price:199, image:"https://picsum.photos/seed/brio4k/600/400" },

  { id:31, name:"Amazon Echo Dot (5th Gen)", price:49, image:"https://picsum.photos/seed/echodot5/600/400" },
  { id:32, name:"Google Nest Hub", price:99, image:"https://picsum.photos/seed/nesthub/600/400" },
  { id:33, name:"Ring Video Doorbell 4", price:159, image:"https://picsum.photos/seed/ringdoorbell/600/400" },
  { id:34, name:"Philips Hue Kit", price:199, image:"https://picsum.photos/seed/huestarter/600/400" },
  { id:35, name:"TP-Link Smart Plug", price:29, image:"https://picsum.photos/seed/smartplug/600/400" },

  { id:36, name:"Apple Watch Ultra 2", price:799, image:"https://picsum.photos/seed/watchultra2/600/400" },
  { id:37, name:"Samsung Galaxy Watch 6", price:399, image:"https://picsum.photos/seed/galaxywatch6/600/400" },
  { id:38, name:"Fitbit Charge 6", price:149, image:"https://picsum.photos/seed/fitbitcharge6/600/400" },
  { id:39, name:"Garmin Fenix 7X", price:999, image:"https://picsum.photos/seed/fenix7x/600/400" },
  { id:40, name:"Oura Ring Gen 3", price:349, image:"https://picsum.photos/seed/ouraring3/600/400" },

  { id:41, name:"DJI Mini 4 Pro", price:999, image:"https://picsum.photos/seed/djimini4/600/400" },
  { id:42, name:"GoPro Hero 12", price:399, image:"https://picsum.photos/seed/goprohero12/600/400" },
  { id:43, name:"Kindle Paperwhite", price:139, image:"https://picsum.photos/seed/kindlepw/600/400" },
  { id:44, name:"Anker Power Bank 20K", price:59, image:"https://picsum.photos/seed/anker20k/600/400" },
  { id:45, name:"Samsung T7 Portable SSD", price:119, image:"https://picsum.photos/seed/samsungt7/600/400" },

  { id:46, name:"WD Black 2TB HDD", price:89, image:"https://picsum.photos/seed/wdblck2tb/600/400" },
  { id:47, name:"Canon EOS R50", price:699, image:"https://picsum.photos/seed/canoneosr50/600/400" },
  { id:48, name:"Sony ZV-E10", price:799, image:"https://picsum.photos/seed/sonyzve10/600/400" },
  { id:49, name:"Roku Streaming Stick 4K", price:49, image:"https://picsum.photos/seed/rokustick4k/600/400" },
  { id:50, name:"Apple TV 4K", price:129, image:"https://picsum.photos/seed/appletv4k/600/400" }
];

// DOM refs
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const checkoutBtn = document.getElementById("checkout-btn");

let cart = [];

// Render grid
function renderProducts(){
  productList.innerHTML = "";
  products.forEach(p => {
    const dom = document.createElement("article");
    dom.className = "product";
    dom.innerHTML = `
      <img loading="lazy" src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="desc">${p.price ? "" : ""}</p>
      <p class="price">$${p.price}</p>
      <button data-id="${p.id}">Add to Cart</button>
    `;
    // Button handler
    dom.querySelector("button").addEventListener("click", () => addToCart(p.id));
    productList.appendChild(dom);
  });
}

// Add to cart
function addToCart(id){
  const product = products.find(p => p.id === id);
  if(!product) return;
  cart.push(product);
  const li = document.createElement("li");
  li.textContent = `${product.name} — $${product.price}`;
  cartItems.appendChild(li);
  updateTotal();
  checkoutBtn.disabled = false;
}

// Update total
function updateTotal(){
  const total = cart.reduce((s, i) => s + i.price, 0);
  totalDisplay.textContent = `Total: $${total}`;
}

// Checkout
checkoutBtn.addEventListener("click", () => {
  if(cart.length === 0){ alert("Your cart is empty!"); return; }
  const total = cart.reduce((s,i)=>s+i.price,0);
  alert(`✅ Order placed — ${cart.length} item(s) — Total: $${total}\n\n(For demo: order not actually sent.)`);
  // reset
  cart = [];
  cartItems.innerHTML = "";
  updateTotal();
  checkoutBtn.disabled = true;
});

// init
renderProducts();
