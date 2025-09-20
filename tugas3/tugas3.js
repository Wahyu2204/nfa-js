// Data awal produk
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Mengambil elemen dari HTML
const tableBody = document.getElementById('product-list-body');
const form = document.getElementById('form-tambah-produk');
const namaInput = document.getElementById('nama-produk');
const hargaInput = document.getElementById('harga-produk');
const stokInput = document.getElementById('stok-produk');

// Fungsi untuk menampilkan semua produk ke tabel HTML.
const tampilkanProduk = () => {
    // Kosongkan tabel
    tableBody.innerHTML = '';

    // Loop setiap produk dan buat baris tabel baru
    produkToko.forEach(produk => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>${produk.harga}</td>
            <td>${produk.stok}</td>
            <td>
                <button class="delete-btn" data-id="${produk.id}">Hapus</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
};

// Fungsi untuk menambah produk baru.
const tambahProduk = (nama, harga, stok) => {
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
};

// Fungsi untuk menghapus produk berdasarkan ID.
const hapusProduk = (id) => {
    produkToko = produkToko.filter(produk => produk.id !== id);
};

// Event listener untuk form penambahan produk
form.addEventListener('submit', (event) => {
    event.preventDefault();
    tambahProduk(namaInput.value, parseInt(hargaInput.value), parseInt(stokInput.value));
    tampilkanProduk();
    form.reset();
});

// Event listener untuk tombol hapus
tableBody.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const id = parseInt(event.target.getAttribute('data-id'));
        hapusProduk(id);
        tampilkanProduk();
    }
});

// Tampilkan produk saat halaman pertama kali dimuat
tampilkanProduk();