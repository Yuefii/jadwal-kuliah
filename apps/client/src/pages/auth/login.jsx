import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [npm, setNpm] = useState("");
  const [password, setPassword] = useState("");
  const apikey = process.env.NEXT_PUBLIC_API_URL

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apikey + "/auth/login", {
        npm,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(token)
      console.log("Login successful");
      Swal.fire({
        icon: "success",
        title: "Kamu Telah Berhasil Masuk",
        text: "Silahkan nikmati fitur yang kami sediakan!",
        showConfirmButton: false,
        timer: 2000,
      });
      router.push("/");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Masuk",
        text: "Masukan data yang benar!",
        confirmButtonText: "OK",
      });
    }
    const logout = () => {
      setIsAuthenticated(false);
  };
  };

  return (
    <main>
      <Image
        className="sm:w-full absolute"
        src="/wave.png"
        width={500}
        height={350}
        alt="wave"
      />
      <div className="relative">
      <h1 className="font-semibold text-white text-4xl py-16 px-5">Masuk</h1>
      </div>
      <form onSubmit={handleLogin} className="relative py-20 text-sm">
        <div className="mx-6 border-2 border-blue-500 p-10 rounded-xl">
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">NPM</label>
            <input
              className="border border-blue-500 rounded-xl p-2"
              type="number"
              value={npm}
              onChange={(e) => setNpm(e.target.value)}
              required
            />
          </div>
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Kata Sandi</label>
            <input
              className="border border-blue-500 rounded-xl p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full rounded-xl p-2 text-white font-semibold my-3"
          >
            selanjutnya..
          </button>
        <p className="text-sm text-blue-800">Belum punya akun? <Link href="/auth/register" className="text-blue-500 hover:text-blue-800 hover:underline">Daftar</Link></p>
        </div>
      </form>
    </main>
  );
};

export default Login;
