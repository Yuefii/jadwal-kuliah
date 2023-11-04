import React, { useState, useEffect } from "react";
import jadwal from "@/json/jadwal";
import { ChalkboardTeacher, Clock, User } from "@phosphor-icons/react";

const ListHari = () => {
  const [kelasTerpilih, setKelasTerpilih] = useState(null);
  const [hariTerpilih, setHariTerpilih] = useState(null);

  useEffect(() => {
    if (!kelasTerpilih && !hariTerpilih && jadwal.length > 0) {
      setKelasTerpilih(jadwal[0].kelas);
      setHariTerpilih(jadwal[0].data[0].hari);
    }
  }, [kelasTerpilih, hariTerpilih]);

  const handleClickKelas = (kelas) => {
    setKelasTerpilih(kelas);
    setHariTerpilih(null);
  };

  const handleClickHari = (hari) => {
    setHariTerpilih(hari);
  };

  return (
    <main>
      <div className="relative mt-14 flex justify-center items-center">
        {jadwal.map((kelasItem) => (
          <button
            className={`bg-blue-500 mx-3 w-full text-white text-sm rounded-xl px-10 py-2 font-semibold ${
              kelasTerpilih === kelasItem.kelas ? "bg-blue-800" : ""
            }`}
            key={kelasItem.kelas}
            onClick={() => handleClickKelas(kelasItem.kelas)}
          >
            {kelasItem.kelas}
          </button>
        ))}
      </div>

      {kelasTerpilih && (
        <div className="relative border-2 border-blue-500 py-2 rounded-xl mx-3 mt-3 font-semibold">
          <div className="gap-3 flex justify-center items-center">
            {jadwal
              .find((kelasItem) => kelasItem.kelas === kelasTerpilih)
              .data.map((hariItem) => (
                <button
                  className={`text-xs text-white bg-blue-500 rounded-xl py-2 px-4 ${
                    hariTerpilih === hariItem.hari ? "bg-blue-800" : ""
                  }`}
                  key={hariItem.hari}
                  onClick={() => handleClickHari(hariItem.hari)}
                >
                  {hariItem.hari}
                </button>
              ))}
          </div>
        </div>
      )}

      {hariTerpilih && kelasTerpilih && (
        <div className="border-2 border-blue-500 rounded-xl mx-3 mt-3 h-auto mb-5">
          {jadwal
            .find((kelasItem) => kelasItem.kelas === kelasTerpilih)
            .data.find((hariItem) => hariItem.hari === hariTerpilih)
            .mataKuliah.map((mataKuliah, index) => (
              <div
                key={index}
                className="p-3 text-blue-800 font-semibold text-center"
              >
                <h1 className="bg-blue-500 rounded-lg text-white text-lg">
                  {mataKuliah.nama}
                </h1>
                <div className="flex gap-2 justify-center items-center p-2">
                  <User size={20} />
                  <h2>{mataKuliah.dosen}</h2>
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="flex gap-2 justify-center items-center">
                    <Clock size={20} />
                    <p>{mataKuliah.jam}</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <ChalkboardTeacher size={20} />
                    <p>{mataKuliah.ruangan}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </main>
  );
};

export default ListHari;
