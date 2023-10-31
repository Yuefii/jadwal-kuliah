import Image from "next/image";
import Wave from "../wave";

const Header = () => {
  return (
    <main>
      <Wave src="/wave.svg" width={500} height={350} alt="wave" />
      <div className="relative">
        <div className="flex">
          <div className="mt-8">
            <Image
              className="mx-3 md:ml-20"
              src="/avatar.png"
              width={50}
              height={50}
              alt="avatar"
            />
          </div>
          <div className="mt-8 text-white font-semibold">
            <h1>Hallo, Users</h1>
            <h1>Teknologi Informasi</h1>
          </div>
        </div>
        <div className="flex justify-between mx-auto">
          <div className="text-white font-semibold mx-4 my-8 md:ml-20">
            <h1 className="text-lg md:text-2xl">Jadwal Hari Ini</h1>
            <h1 className="text-xs">Senin 28 oktober 2023</h1>
          </div>
          <div>
            <button className="text-xs text-white bg-blue-500 py-2 px-4 my-12 mx-8 sm:mx-28 md:mx-36 md:text-sm rounded-xl">
              Lihat Jadwal
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
