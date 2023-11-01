import Link from "next/link";
import { useRouter } from "next/router";

const HeadMalam = ({ children }) => {
  const router = useRouter();
  const isJadwalPages = router.pathname === "/views/jadwal";

  return (
    <main>
      <div className="mt-2 mx-5">
        <div className="flex justify-between">
          <h1 className=" text-xl text-center text-blue-500 font-semibold">
            Kelas Malam
          </h1>
          {isJadwalPages && (
            <Link href="/views/ComingSoon">
              <button className="bg-blue-500 p-2 rounded-xl text-xs text-white font-semibold">
                Lihat Semua
              </button>
            </Link>
          )}
        </div>
        {children}
      </div>
    </main>
  );
};
export default HeadMalam;
