import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [npm, setNpm] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        npm,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(token)
      console.log("Login successful");
      router.push("/");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed", error);
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
      <form onSubmit={handleLogin} className="relative py-60">
        <div className="mx-10">
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
            className="bg-blue-500 w-full rounded-xl p-2 text-white font-semibold my-3"
          >
            Masuk
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
