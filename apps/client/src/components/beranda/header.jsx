import Image from "next/image";
// import { BellRinging, BellSlash } from "@phosphor-icons/react";
import Link from "next/link";
// import { useState } from "react";
import { getFormattedDate } from "@/utils/formatedDay";

const Header = ({ userData }) => {
  const hariIni = getFormattedDate();

  // const [isClicked, setIsClicked] = useState(false);
  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

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
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="mt-3">
              <Image
                className="mx-3 md:ml-20"
                src="/avatar.png"
                width={50}
                height={50}
                alt="avatar"
              />
            </div>
            <div className="mt-4 text-white font-semibold text-sm">
              <h1>{userData.data && userData.data.nama_lengkap}</h1>
              <h1>
                {userData.data && userData.data.jurusan.nama_jurusan}{" "}
                {userData.data && userData.data.semester.semester_ke}
              </h1>
            </div>
          </div>
          {/* <div className="m-3 text-white cursor-pointer" onClick={handleClick}>
            {isClicked ? <BellRinging size={32} /> : <BellSlash size={32} />}
          </div> */}
        </div>
        <div className="flex justify-between mx-auto">
          <div className="text-white mx-4 my-6 md:ml-20">
            <h1 className="text-sm font-semibold md:text-2xl">Jadwal Hari Ini</h1>
            <h1 className="text-xs">{hariIni}</h1>
          </div>
          <div>
            <Link href="/views/comingSoon">
              <button className="text-xs text-white font-semibold shadow-sm bg-blue-500 py-2 px-4 my-8 mx-8 sm:mx-28 md:mx-36 md:text-sm rounded-lg hover:bg-blue-800">
                Lihat Jadwal
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
