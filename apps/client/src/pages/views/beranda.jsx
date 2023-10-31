import Header from "@/components/beranda/header";
import HeadPagi from "@/components/headPagi";
import BorderDetails from "@/components/borderDetails";
import MatkulPagi from "@/components/beranda/matkulPagi";
import HeadMalam from "@/components/headMalam";
import MatkulMalam from "@/components/beranda/matkulMalam";

const Beranda = () => {
  return (
    <main>
      <div className="relative lg:hidden">
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
      </div>
    </main>
  );
};

export default Beranda;
