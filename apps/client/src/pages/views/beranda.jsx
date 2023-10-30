import Header from "@/components/beranda/header";
import KelasMalam from "@/components/beranda/kelasMalam";
import KelasPagi from "@/components/beranda/kelasPagi";

const Beranda = () => {
  return (
    <main>
      <div className="relative">
        <Header/>
        <KelasPagi/>
        <KelasMalam/>
      </div>
    </main>
  );
};

export default Beranda;
