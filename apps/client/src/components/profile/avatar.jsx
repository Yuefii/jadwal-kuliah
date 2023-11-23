import useUserData from "@/lib/axios.userData";
import Image from "next/image";

const Avatar = ({ children }) => {
  const userData = useUserData();
  const apikey = process.env.NEXT_PUBLIC_API_URL;

  const imageUrl = userData?.data?.avatar ? `${apikey}/${userData.data.avatar}` : "/avatarProfile.png";

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
            className="object-cover rounded-full h-32 w-32 shadow-sm"
            src={imageUrl}
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
