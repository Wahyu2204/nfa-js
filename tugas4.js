/**
 *Anda diminta untuk membuat Sistem Manajemen Transportasi menggunakan konsep Object-Oriented Programming (OOP) dalam JavaScript. Sistem ini akan mencakup berbagai jenis kendaraan yang memiliki perilaku dan karakteristik yang berbeda.

 *Perusahaan ingin mencatat data pelanggan yang menyewa kendaraan.

    Setiap pelanggan memiliki nama, nomor telepon, dan kendaraan yang disewa.
    Sistem harus bisa menampilkan daftar pelanggan yang sedang menyewa kendaraan.

 *Tugas:

    Buat class Pelanggan dengan properti nama, nomorTelepon, dan kendaraanDisewa.
    Tambahkan metode untuk mencatat transaksi penyewaan kendaraan oleh pelanggan.
    Buat sistem yang menampilkan daftar pelanggan yang sedang menyewa kendaraan.

 */

class kendaraan {
  constructor(jenis, merk, platNomor) {
    this.jenis = jenis;
    this.merk = merk;
    this.platNomor = platNomor;
  }

  // Metode untuk mendapatkan info singkat kendaraan
  getInfo() {
    return `${this.jenis} - ${this.merk} (Plat: ${this.platNomor})`;
  }
}

class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // Awalnya null karena tidak ada kendaraan yang disewa
  }

  // Metode untuk menyewa kendaraan
  sewaKendaraan(kendaraan, daftarPenyewa) {
    // Menetapkan kendaraan yang disewa ke properti pelanggan
    this.kendaraanDisewa = kendaraan;

    // Menambahkan pelanggan ini ke dalam daftar penyewa aktif
    daftarPenyewa.push(this);

    console.log(
      `✅ Transaksi berhasil: ${
        this.nama
      } telah menyewa ${kendaraan.getInfo()}.`
    );
  }
}

// Sistem Manajemen Penyewaan Kendaraan

// Buat sebuah array untuk menyimpan daftar pelanggan yang sedang aktif menyewa.
const daftarPelangganAktif = [];

// Fungsi untuk menambahkan pelanggan ke daftar
function tampilkanDaftarPenyewa() {
  console.log("\n========================================");
  console.log("👥 DAFTAR PELANGGAN YANG SEDANG MENYEWA");
  console.log("========================================");

  // Cek jika tidak ada penyewa aktif
  if (daftarPelangganAktif.length === 0) {
    console.log("Tidak ada pelanggan yang sedang menyewa saat ini.");
    return;
  }

  // Loop melalui setiap pelanggan di daftar dan tampilkan informasinya
  daftarPelangganAktif.forEach((pelanggan, index) => {
    console.log(`\n--- Pelanggan ${index + 1} ---`);
    console.log(`Nama            : ${pelanggan.nama}`);
    console.log(`Nomor Telepon   : ${pelanggan.nomorTelepon}`);

    // Memastikan kendaraanDisewa tidak null sebelum memanggil getInfo()
    if (pelanggan.kendaraanDisewa) {
      console.log(`Kendaraan Disewa: ${pelanggan.kendaraanDisewa.getInfo()}`);
    }
  });
  console.log("\n========================================");
}

// Contoh penggunaan

const pelanggan1 = new Pelanggan("Alice", "08123456789");
const pelanggan2 = new Pelanggan("Bob", "08987654321");

const mobil1 = new kendaraan("Mobil", "Toyota", "B 1234 CD");
const motor1 = new kendaraan("Motor", "Honda", "D 5678 EF");

pelanggan1.sewaKendaraan(mobil1, daftarPelangganAktif);
pelanggan2.sewaKendaraan(motor1, daftarPelangganAktif);

tampilkanDaftarPenyewa();
