import Image from "next/image";

const ComingSoon = () => {
  return (
    <main>
      <Image
        className="sm:w-full h-60 absolute"
        src="/wave.png"
        width={500}
        height={350}
        alt="wave"
      />
      <div className="relative">
        <div className="flex justify-center">
          <Image
            className="w-1/2 mt-36"
            src="/ComingSoon.png"
            width={500}
            height={350}
            alt="ComingSoon"
          />
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="text-center text-blue-800 font-bold text-lg">
            <p>Coming Soon</p>
            <p>Lagi Proses Sabar!!</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ComingSoon;
