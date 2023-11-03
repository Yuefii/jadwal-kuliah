import Link from "next/link";
import { House, CalendarCheck, User } from "@phosphor-icons/react";
import { useRouter } from "next/router"; // Menambahkan import useRouter

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const isLinkActive = (path) => {
    return pathname === path
      ? "border-4 border-white rounded-full bg-blue-500 -mt-8 p-2"
      : "";
  };

  return (
    <main>
      <div className="fixed bottom-0 right-0 left-0 bg-blue-500 rounded-t-2xl p-4 lg:hidden">
        <ul className="flex justify-center gap-20 text-white">
          <Link href="/views/jadwal">
            <li
              className={`flex flex-col justify-center items-center ${isLinkActive(
                "/views/jadwal"
              )}`}
            >
              <CalendarCheck size={30} />
            </li>
          </Link>
          <Link href="/">
            <li
              className={`flex flex-col justify-center items-center ${isLinkActive(
                "/"
              )}`}
            >
              <House size={30} />
            </li>
          </Link>
          <Link href="/views/comingSoon">
            <li
              className={`flex flex-col justify-center items-center ${isLinkActive(
                "/views/comingSoon"
              )}`}
            >
              <User size={30} />
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
