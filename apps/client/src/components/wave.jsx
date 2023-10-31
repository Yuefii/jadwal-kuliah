import Image from "next/image";
const Wave = ({ src, width, height, alt }) => {
  return (
    <main>
      <Image
        className="sm:w-full h-96 absolute"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </main>
  );
};

export default Wave;
