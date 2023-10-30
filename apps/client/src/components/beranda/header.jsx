import Image from "next/image";

const Header = () => {
  return (
    <main>
      <Image
        className="absolute z-0"
        src="/wave.png"
        width={500}
        height={350}
        alt="card logo"
      />
      <div className="relative">
        <div className="flex">
          <div className="mt-5">
            <Image
              className="mx-3"
              src="/avatar.png"
              width={50}
              height={50}
              alt="avatar"
            />
          </div>
          <div className="mt-5 text-white font-semibold">
            <h1 className="">Hallo, Users</h1>
            <h1 className="">Teknologi Informasi</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-white font-semibold mx-4 my-8">
            <h1 className="text-lg">Jadwal Hari Ini</h1>
            <h1 className="text-xs">Senin 28 oktober 2023</h1>
          </div>
          <div>
            <button className="text-xs text-white bg-blue-500 py-2 px-4 my-12 mx-8 rounded-xl">
              Lihat Jadwal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header
