import Image from "next/image";
import DescProfile from "./descProfile";

const Avatar = () => {
  return (
    <main>
      <Image
        className="sm:w-full h-96 absolute"
        src="/wave2.png"
        width={500}
        height={350}
        alt="wave"
      />
      <div className="relative">
        <div className="flex justify-center py-14">
          <Image
            className="w-1/3 "
            src="/avatarProfile.png"
            width={120}
            height={120}
            alt="avatarProfile"
          />
        </div>
        <div className="flex justify-center items-center -mt-10">
          <button className="bg-blue-500 py-2 px-4 rounded-xl text-xs text-white font-semibold">
            Edit Profile
          </button>
        </div>
        <DescProfile />
      </div>
    </main>
  );
};

export default Avatar;
