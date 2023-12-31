import Image from "next/image";
import { SignOut } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getFormattedDate } from "@/utils/formatedDay";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import useUserData from "@/lib/axios.userData";

const Header = () => {
  const hariIni = getFormattedDate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const userData = useUserData();
  const apikey = process.env.NEXT_PUBLIC_API_URL;
  const imageUrl = userData?.data?.avatar ? `${apikey}/${userData.data.avatar}` : "/avatarProfile.png";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Konfirmasi",
      text: "Apakah Anda yakin ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluar",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        Swal.fire({
          icon: "success",
          title: "Kamu Telah Berhasil Keluar",
          text: "Silahkan login kembali!",
          showConfirmButton: false,
          timer: 2000,
        });
        router.push("/auth/login");
      }
    });
  };

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
                className="mx-3 md:ml-20 object-cover rounded-full h-12 w-12 shadow-sm"
                src={imageUrl}
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
          {isLoggedIn ? (
            <div
              className="m-3 text-black cursor-pointer bg-white rounded-full p-2"
              onClick={handleLogout}
            >
              <SignOut size={18} />
            </div>
          ) : null}
        </div>
        <div className="flex justify-between mx-auto">
          <div className="text-white mx-4 my-6 md:ml-20">
            <h1 className="text-sm font-semibold md:text-2xl">
              Jadwal Hari Ini
            </h1>
            <h1 className="text-xs">{hariIni}</h1>
          </div>
          <div>
            <Link href="/views/jadwal">
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
