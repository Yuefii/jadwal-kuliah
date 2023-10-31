const HeadMalam = ({ children }) => {
  return (
    <main>
      <div className="mt-2 mx-5">
        <h1 className=" text-xl text-center text-blue-500 font-semibold">
          Kelas Malam
        </h1>
        {children}
      </div>
    </main>
  );
};
export default HeadMalam;
