import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";

const Register = () => {
  const router = useRouter();
  const [nama_lengkap, setNama_lengkap] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [semesters, setSemesters] = useState("");
  const [npm, setNpm] = useState("");
  const [password, setPassword] = useState("");

  const handleSelectChangeJurusan = (event) => {
    setJurusan(event.target.value);
  };

  const handleSelectChangeSemesters = (event) => {
    setSemesters(event.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        nama_lengkap,
        jurusan,
        semesters,
        npm,
        password,
      });
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Pendaftaran kamu berhasil",
        text: "Silahkan Masuk!",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/auth/login");
    } catch (error) {
      console.error("Registration failed:", error);
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal",
        text: "Masukan data yang benar!",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <main>
      <Image
        className="sm:w-full -mt-10 absolute"
        src="/wave.png"
        width={500}
        height={350}
        alt="wave"
      />
      <h1 className="relative font-semibold text-white text-4xl py-16 px-5">Daftar</h1>
      <form className="relative">
        <div className="mx-5 border-2 border-blue-500 p-2 rounded-xl text-sm">
          <div className="my-2 mx-3 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Nama Lengkap</label>
            <input
              className="border border-blue-500 rounded-xl p-1.5"
              type="text"
              value={nama_lengkap}
              onChange={(e) => setNama_lengkap(e.target.value)}
              required
            />
          </div>
          <div className="my-2 mx-3 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Program Studi</label>
            <select
              className="border border-blue-500 rounded-xl p-1.5"
              value={jurusan}
              onChange={handleSelectChangeJurusan}
            >
              <option value="">Pilih...</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Teknologi Informasi">Teknologi Informasi</option>
              <option value="Rekayasa Perangkat Lunak">
                Rekayasa Perangkat Lunak
              </option>
            </select>
            {jurusan && <p>Anda memilih: {jurusan}</p>}
          </div>
          <div className="my-2 mx-3 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Semester</label>
            <select
              className="border border-blue-500 rounded-xl p-1.5"
              value={semesters}
              onChange={handleSelectChangeSemesters}
            >
              <option value="">Pilih...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            {semesters && <p>Anda memilih: {semesters}</p>}
          </div>
          <div className="my-2 mx-3 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">NPM</label>
            <input
              className="border border-blue-500 rounded-xl p-1.5"
              type="number"
              value={npm}
              onChange={(e) => setNpm(e.target.value)}
              required
            />
          </div>
          <div className="my-2 mx-3 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Kata Sandi</label>
            <input
              className="border border-blue-500 rounded-xl p-1.5"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mx-3">
          <button
            type="submit"
            onClick={handleRegister}
            className="bg-blue-500 w-full rounded-xl p-1.5 text-white font-semibold my-3"
          >
            selanjutnya...
          </button>
          </div>
          <p className="mx-3 mb-5 text-sm text-blue-800">Sudah punya akun? <Link href="/auth/login" className="text-blue-500 hover:text-blue-800 hover:underline font">Masuk</Link></p>
        </div>
      </form>
    </main>
  );
};
export default Register;
