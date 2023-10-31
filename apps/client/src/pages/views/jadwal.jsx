import BorderDetails from "@/components/borderDetails";
import HeadMalam from "@/components/headMalam";
import HeadPagi from "@/components/headPagi";
import Header from "@/components/jadwal/header";
import MatkulMalam from "@/components/jadwal/matkulMalam";
import MatkulPagi from "@/components/jadwal/matkulPagi";

const Jadwal = () => {
  return (
    <main>
      <Header />
      <HeadPagi>
        <BorderDetails>
          <MatkulPagi />
        </BorderDetails>
      </HeadPagi>
      <HeadMalam>
        <BorderDetails>
          <MatkulMalam />
        </BorderDetails>
      </HeadMalam>
    </main>
  );
};
export default Jadwal;
