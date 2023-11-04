import Image from "next/image";
const Header = () => {
  return (
    <main>
      <Image
        className="sm:w-full h-72 absolute"
        src="/wave.png"
        width={500}
        height={350}
        alt="wave"
      />
      <div className="relative">
        <div className="flex justify-between mx-auto -mt-4">
          <div className="text-white font-semibold mx-4 my-10 md:ml-20">
            <h1 className="text-xl md:text-2xl">Teknologi Informasi</h1>
            <h1 className="text-sm">Semester 2</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
