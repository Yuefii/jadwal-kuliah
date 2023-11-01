const DescProfile = () => {
  return (
    <main>
      <div className="border-2 border-blue-500 mx-5 mt-10 rounded-xl h-80">
        <div className="flex justify-center items-center text-blue-500">
          <h1 className="font-semibold text-xl">Quotes</h1>
        </div>
        <p className="font-serif text-blue-500 text-center p-3">
          tidak ada yang lebih jago, tapi siapa yang mulai duluan dialah
          pemenangnya.
        </p>
        <div className="border-2 border-b border-blue-500 mt-12"></div>
        <ul className="p-5 text-blue-500 font-semibold">
          <li>NPM: 2023806000</li>
          <li>Nama Lengkap: Users Gelap</li>
          <li>Tanggal Lahir: 20 Oktober 2007</li>
          <li>Program Studi: Teknologi Informasi</li>
          <li>Semester: 1</li>
        </ul>
      </div>
    </main>
  );
};

export default DescProfile;
