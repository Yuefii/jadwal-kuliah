import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const UpadateProfile = () => {
  const [userData, setUserData] = useState({
    nama_lengkap: "",
    jurusanNama: "",
    semesterKe: "",
  });
  const apikey = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const redirectLogin = () => {
    router.push("/login");
  };

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token tidak tersedia di localStorage.");
      redirectLogin();
      return;
    }

    try {
      const response = await axios.get(apikey + "/api/V1/user-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUserData(response.data);
      } else {
        console.error("Gagal mengambil data pengguna:", response.status);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Gagal mengambil data pengguna:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateClick = async () => {
    const { value: formValues, s } = await Swal.fire({
        title: "Update Data Pengguna",
        html:
          '<div class="p-2">' +
            '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">' +
              '<input id="swal-input1" class="input-style" placeholder="Nama Lengkap" value="'+ '">' +
              '<input id="swal-input2" class="input-style" placeholder="Nama Jurusan" value="' + '">' +
              '<input id="swal-input3" class="input-style" placeholder="Semester" value="'  + '">' +
            '</div>' +
          '</div>',
        focusConfirm: false,
        preConfirm: () => {
          return {
            nama_lengkap: document.getElementById("swal-input1").value,
            jurusanNama: document.getElementById("swal-input2").value,
            semesterKe: document.getElementById("swal-input3").value,
          };
        },
      });

    if (formValues) {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.patch(
          apikey + "/api/V1/update-profile",
          formValues,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Data updated:", response.data);
        Swal.fire({
          icon: "success",
          title: "Update Berhasil!",
          text: "Data pengguna telah diperbarui.",
        }).then(() => {
          fetchData();
        });
      } catch (error) {
        console.error("Error updating data:", error);
        Swal.fire({
          icon: "error",
          title: "Update Gagal!",
          text: "Terjadi kesalahan saat memperbarui data.",
        });
      }
    }
  };

  return (
    <main>
          <button
            className="bg-black text-white rounded-lg text-xs p-2 mt-5"
            onClick={handleUpdateClick}
          >
            Update Data
          </button>
    </main>
  );
};

export default UpadateProfile;
