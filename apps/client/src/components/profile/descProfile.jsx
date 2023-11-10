const DescProfile = () => {
  return (
    <main>
      <h1 className="text-center -mb-6 mt-5 font-bold text-blue-800">BIODATA</h1>
      <div className="border-2 border-blue-500 mx-5 mt-10 rounded-xl h-auto">
        <div className="p-5 text-blue-800 font-semibold">
          <div className="mb-3">
            <p>NPM:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl">
              20202020020202
            </p>
          </div>
          <div className="mb-3">
            <p>Nama Lengkap:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl">
              User gelap ketakutan
            </p>
          </div>
          <div className="mb-3">
            <p>Program Studi:</p>
            <p className="p-2 border-2 border-blue-500 rounded-xl">
              Teknologi Informasi
            </p>
          </div>
          <div className="mb-3 flex gap-3 items-center">
            <p>Semester:</p>
            <p className="w-full text-center p-2 border-2 border-blue-500 rounded-xl">
              2
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DescProfile;
