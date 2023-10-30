const KelasMalam = () => {
  return (
    <main>
      <div className="mt-2 mx-5">
        <h1 className=" text-xl text-blue-500 font-semibold">Kelas Malam</h1>
        <div className="flex justify-center mt-2">
          <div className="border border-blue-500 h-32 rounded-l-xl px-10 py-5">
            <ul className="text-center text-blue-500 text-md font-semibold">
              <li>Matematika</li>
              <li>18.30</li>
              <li>516</li>
            </ul>
          </div>
          <div className="border border-blue-500 h-32 rounded-r-xl px-10 py-5">
            <ul className="text-center text-blue-500 text-md font-semibold">
              <li>Matematika</li>
              <li>18.30</li>
              <li>516</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KelasMalam;
