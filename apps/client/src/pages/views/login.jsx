import Image from "next/image";

const Login = () => {
  return (
    <main>
      <Image
        className="sm:w-full absolute"
        src="/wave.png"
        width={500}
        height={350}
        alt="wave"
      />
      <form className="relative py-60">
        <div className="mx-10">
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">NPM</label>
            <input
              className="border-2 border-blue-500 rounded-xl p-2"
              type="email"
              required
            />
          </div>
          <div className="my-2 flex flex-col justify-center text-blue-800">
            <label className="p-2 font-semibold">Kata Sandi</label>
            <input
              className="border-2 border-blue-500 rounded-xl p-2"
              type="password"
              required
            />
          </div>
            <button className="bg-blue-500 w-full rounded-xl p-2 text-white font-semibold my-3">Masuk</button>
        </div>
      </form>
    </main>
  );
};

export default Login;
