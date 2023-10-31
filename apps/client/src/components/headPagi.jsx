const HeadPagi = ({ children }) => {
  return (
    <main>
      <div className="mt-2 mx-5">
        <h1 className=" text-xl text-center text-blue-500 font-semibold">
          Kelas Pagi
        </h1>
        {children}
      </div>
    </main>
  );
};
export default HeadPagi;
