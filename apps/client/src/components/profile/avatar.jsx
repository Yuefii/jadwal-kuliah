import Image from "next/image";

const Avatar = ({children}) => {
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
            className="w-1/3"
            src="/avatarProfile.png"
            width={120}
            height={120}
            alt="avatarProfile"
          />
        </div>
        <div className="flex justify-center items-center -mt-10">
          <button className="bg-blue-500 py-2 px-4 rounded-lg text-xs text-white font-semibold hover:bg-blue-800">
            Edit Profile
          </button>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Avatar;
