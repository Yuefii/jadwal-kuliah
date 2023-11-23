import axios from "axios";
import Swal from "sweetalert2";
import useUserData from "@/lib/axios.userData";

const ButtonUpdate = () => {
  const userData = useUserData();
  const apikey = process.env.NEXT_PUBLIC_API_URL;

  const handleUpdateClick = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Profil",
      html:
        '<div class="border-2 border-blue-500 p-2 rounded-xl text-sm">' +
        '<div class="my-6 mx-3 flex flex-col justify-center text-blue-800 space-y-2">' +
        // UPDATE NAMA
        '<input id="swal-input1" class="border border-blue-500 rounded-xl p-1.5" placeholder="Nama Lengkap" value="' +
        userData.data.nama_lengkap +
        '">' +
        // UPDATE SEMESTER
        '<select id="swal-input3" class="border border-blue-500 rounded-xl p-1.5">' +
        '<option value="">Pilih Semester</option>' +
        '<option value="1">Semester 1</option>' +
        '<option value="1A">Semester 1A</option>' +
        '<option value="1B">Semester 1B</option>' +
        '<option value="2">Semester 2</option>' +
        '<option value="3">Semester 3</option>' +
        '<option value="3A">Semester 3A</option>' +
        '<option value="3B">Semester 3B</option>' +
        '<option value="4">Semester 4</option>' +
        '<option value="5">Semester 5</option>' +
        '<option value="5A">Semester 5A</option>' +
        '<option value="5B">Semester 5B</option>' +
        '<option value="6">Semester 6</option>' +
        '<option value="7">Semester 7</option>' +
        '<option value="7A">Semester 7A</option>' +
        '<option value="7B">Semester 7B</option>' +
        '<option value="8">Semester 8</option>' +
        "</select>" +
        // UPDATE JURUSAN
        '<select id="swal-input2" class="border border-blue-500 rounded-xl p-1.5">' +
        '<option value="">Pilih Jurusan</option>' +
        '<option value="Sistem Informasi">Sistem Informasi</option>' +
        '<option value="Teknologi Informasi">Teknologi Informasi</option>' +
        '<option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>' +
        "</select>" +
        // INPUT FILE UNTUK AVATAR
        '<input type="file" id="swal-input-file" class="border border-blue-500 rounded-xl p-1.5">' +
        "</div>" +
        "</div>",
      focusConfirm: false,
      preConfirm: () => {
        return {
          nama_lengkap: document.getElementById("swal-input1").value,
          jurusanNama: document.getElementById("swal-input2").value,
          semesterKe: document.getElementById("swal-input3").value,
          avatar: document.getElementById("swal-input-file").files[0],
        };
      },
    });

    if (formValues) {
      const token = localStorage.getItem("token");

      try {
        const formData = new FormData();
        formData.append("avatar", formValues.avatar);

        const responseAvatar = await axios.post(
          `${apikey}/upload-avatar`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const responseUpdate = await axios.patch(
          `${apikey}/api/V1/update-profile`,
          { ...userData.data, ...formValues },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        Swal.fire({
          icon: "success",
          title: "Update Berhasil!",
          text: "Data pengguna telah diperbarui.",
        }).then(() => {
          window.location.reload();
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
      <div className="flex justify-center items-center -mt-10">
        <button
          onClick={handleUpdateClick}
          className="bg-blue-500 py-2 px-4 rounded-lg text-xs text-white font-semibold hover:bg-blue-800"
        >
          Edit Profil
        </button>
      </div>
    </main>
  );
};

export default ButtonUpdate;
