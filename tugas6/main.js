import { index, store, destroy } from "./controller.js";
const main = () => {
  // tambah 2 data
  const userBaru1 = {
    nama: "Lina Marlina",
    umur: 31,
    alamat: "Jl. Cendana No. 15",
    email: "lina.m@example.com",
  };
  const userBaru2 = {
    nama: "Morgan Oey",
    umur: 34,
    alamat: "Jl. Gajah Mada No. 99",
    email: "morgan.o@example.com",
  };
  store(userBaru1);
  store(userBaru2);

  // store(user);
  index();
  destroy();

  // Menampilkan hasil akhir
  index();
};

main();
