import users from "./data.js";

const index = () => {
  // tampil data
  console.log("Daftar User:");
  const formattedUsers = users.map((user, i) => {
    return `${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${
      user.alamat
    }, Email: ${user.email}`;
  });
  console.log(formattedUsers.join("\n"));
};

const store = (user) => {
  // tambah data
  users.push(user);
  console.log(`Data untuk "${user.nama}" berhasil ditambahkan.`);
};

const destroy = () => {
  // hapus data
  const deletedUser = users.pop();

  if (deletedUser) {
    console.log(`Data untuk "${deletedUser.nama}" berhasil dihapus.`);
  } else {
    console.log("Tidak ada data untuk dihapus.");
  }
};

export { index, store, destroy };
