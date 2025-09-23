// Data Produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 8000000 },
  { id: 2, nama: "HP", harga: 5500000 },
  { id: 3, nama: "Tas", harga: 200000 },
  { id: 4, nama: "FlashDisk", harga: 50000 },
  { id: 5, nama: "Buku", harga: 100000 },
];

// Simulasikan Event Handling
const eventHandler = (event) => {
  console.log(`Event ${event} telah terjadi.`);
};

// Menambah Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
  eventHandler(`Produk ${nama} telah ditambahkan `);
}

// Menghapus Produk berdasarkan Rest Parameter
function hapusProduk(...id) {
  produkList = produkList.filter((produk) => !id.includes(produk.id));
  eventHandler(`Produk dengan ID: ${id.join(", ")} telah dihapus`);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
  console.log("\n------------------------");
  console.log("Daftar Produk:");
  produkList.forEach((produk) => {
    const { id, nama, harga } = produk;
    console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
  });
  console.log("------------------------");
}

tampilkanProduk();

// Contoh Penambahan Data
tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
