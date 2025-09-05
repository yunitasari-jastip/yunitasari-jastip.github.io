// js/products.js

// Ambil elemen HTML tempat produk akan ditampilkan
const productList = document.getElementById("product-list");

// Data produk sementara (bisa diganti dari Firebase nanti)
const products = [
  {
    id: 1,
    name: "Tas Coach Original",
    price: 2500000,
    fee: 50000,
    stock: 3,
    image: "assets/images/tas-coach.jpg"
  },
  {
    id: 2,
    name: "Sepatu Nike Air Max",
    price: 1800000,
    fee: 30000,
    stock: 5,
    image: "assets/images/nike-airmax.jpg"
  },
  {
    id: 3,
    name: "Jam Tangan Casio G-Shock",
    price: 2200000,
    fee: 40000,
    stock: 2,
    image: "assets/images/gshock.jpg"
  }
];

// Fungsi untuk menampilkan produk ke halaman
function displayProducts() {
  productList.innerHTML = ""; // kosongkan isi sebelumnya

  products.forEach(product => {
    // Cek status stok
    const isAvailable = product.stock > 0;

    // Template kartu produk
    const card = `
      <div class="col-md-4 mb-4">
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h5>${product.name}</h5>
          <p>Rp ${product.price.toLocaleString()} + Fee Rp ${product.fee.toLocaleString()}</p>
          <p><strong>Stok:</strong> ${isAvailable ? product.stock : "Habis"}</p>
          <button 
            class="btn ${isAvailable ? "btn-primary" : "btn-secondary"} w-100"
            ${isAvailable ? `onclick="orderProduct(${product.id})"` : "disabled"}>
            ${isAvailable ? "Titip Sekarang" : "Stok Habis"}
          </button>
        </div>
      </div>
    `;

    // Masukkan ke dalam daftar produk
    productList.innerHTML += card;
  });
}

// Fungsi saat tombol "Titip Sekarang" diklik
function orderProduct(id) {
  const selectedProduct = products.find(p => p.id === id);

  if (!selectedProduct) {
    alert("Produk tidak ditemukan!");
    return;
  }

  // Arahkan ke halaman pemesanan dengan parameter produk
  window.location.href = `order.html?product=${id}`;
}

// Panggil fungsi saat halaman dimuat
displayProducts();
