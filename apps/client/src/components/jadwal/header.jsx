import Image from "next/image";
import useUserData from "@/lib/axios.userData";

const Header = () => {
  const userData = useUserData();
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
            <h1 className="text-xl md:text-2xl">{userData.data && userData.data.jurusan.nama_jurusan}</h1>
            <h1 className="text-sm">Semester {userData.data && userData.data.semester.semester_ke}</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
