import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

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
      const response = await axios.post("http://localhost:3001/register", {
        nama_lengkap,
        jurusan,
        semesters,
        npm,
        password,
      });
      console.log(response);
      router.push("/views/login");
    } catch (error) {
      console.error("Registration failed:", error);
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
      <form className="relative py-40">
        <div className="mx-10">
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Nama Lengkap</label>
            <input
              className="border-2 border-blue-500 rounded-xl p-2"
              type="text"
              value={nama_lengkap}
              onChange={(e) => setNama_lengkap(e.target.value)}
              required
            />
          </div>
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Program Studi</label>
            <select
              className="border-2 border-blue-500 rounded-xl p-2"
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
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Semester</label>
            <select
              className="border-2 border-blue-500 rounded-xl p-2"
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
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">NPM</label>
            <input
              className="border-2 border-blue-500 rounded-xl p-2"
              type="number"
              value={npm}
              onChange={(e) => setNpm(e.target.value)}
              required
            />
          </div>
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Kata Sandi</label>
            <input
              className="border-2 border-blue-500 rounded-xl p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleRegister}
            className="bg-blue-500 w-full rounded-xl p-2 text-white font-semibold my-3"
          >
            Daftar
          </button>
        </div>
      </form>
    </main>
  );
};
export default Register;
