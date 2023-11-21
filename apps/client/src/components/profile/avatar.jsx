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
          {children}
        </div>
      </main>
    );
  };

  export default Avatar;
