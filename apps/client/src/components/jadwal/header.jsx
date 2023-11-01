import Image from "next/image";
const Header = () => {
  const timeZone = "Asia/Jakarta";
  const options = {
    timeZone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const hariIni = new Date().toLocaleDateString("id-ID", options);

  return (
    <main>
      <Image
        className="sm:w-full h-60 absolute"
        src="/wave.png"
        width={500}
        height={350}
        alt="wave"
      />
      <div className="relative">
        <div className="flex justify-between mx-auto -mt-4">
          <div className="text-white font-semibold mx-4 my-10 md:ml-20">
            <h1 className="text-xl md:text-2xl">Jadwal Hari Ini</h1>
            <h1 className="text-xs">{hariIni}</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
