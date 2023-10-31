import { ChalkboardTeacher, Clock } from "@phosphor-icons/react";

const MatkulPagi = () => {
  return (
    <main>
      <div className="p-3 text-center">
        <div className="text-blue-500 text-md font-semibold mb-2">
          <h1 className="bg-blue-500 rounded-lg text-white text-lg">
            Bahasa Indonesia
          </h1>
          <div className="flex gap-2 justify-center items-center p-2">
              <Clock size={20} />
              <p>09.30</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <ChalkboardTeacher size={20} />
              <p>416</p>
            </div>
        </div>
        <div className="text-blue-500 text-md font-semibold">
          <h1 className="bg-blue-500 rounded-lg text-white text-lg">
            Matematika
          </h1>
          <div className="flex gap-2 justify-center items-center p-2">
              <Clock size={20} />
              <p>09.30</p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <ChalkboardTeacher size={20} />
              <p>416</p>
            </div>
        </div>
      </div>
    </main>
  );
};
export default MatkulPagi;
