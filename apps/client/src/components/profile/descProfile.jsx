import useUserData from "@/lib/axios.userData";

const DescProfile = () => {
  const userData = useUserData();

  return (
    <main>
      <h1 className="text-center -mb-6 mt-5 font-bold text-blue-800">
        BIODATA
      </h1>
      <div className="border border-blue-500 mx-6 h-auto mt-10 rounded-lg">
        <div className="mx-3 text-blue-800 text-sm font-semibold">
          <div className="mb-3">
            <p className="py-2">NPM:</p>
            <p className="p-2 border border-blue-500 rounded-lg">
              {userData.data && userData.data.npm}
            </p>
          </div>
        </div>
        <div className="border border-blue-500 mx-3 mt-5 text-sm rounded-lg h-auto">
          <div className="p-5 text-blue-800 font-semibold">
            <div className="mb-3">
              <p className="py-2">Nama Lengkap:</p>
              <p className="p-2 border border-blue-500 rounded-lg">
                {userData.data && userData.data.nama_lengkap}
              </p>
            </div>
            <div className="mb-3">
              <p className="py-2">Program Studi:</p>
              <p className="p-2 border border-blue-500 rounded-lg">
                {userData.data && userData.data.jurusan.nama_jurusan}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <p>Semester:</p>
              <p className="p-2 border border-blue-500 rounded-lg w-full text-center">
                {userData.data && userData.data.semester.semester_ke}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5"></div>
      </div>
    </main>
  );
};

export default DescProfile;
