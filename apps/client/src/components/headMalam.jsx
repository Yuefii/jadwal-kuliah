const HeadMalam = ({ children }) => {
  return (
    <main>
      <div className="mt-2 mx-5">
        <div className="flex justify-between">
          <h1 className=" text-xl text-center text-blue-800 font-semibold">
            Kelas Malam
          </h1>
        </div>
        {children}
      </div>
    </main>
  );
};
export default HeadMalam;
