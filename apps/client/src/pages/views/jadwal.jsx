import Header from "@/components/jadwal/header";
import ListHari from "@/components/jadwal/listHari";
import { withAuth } from "@/middlewares/auth";

const Jadwal = () => {
  return (
    <main>
      <Header />
      <ListHari />
    </main>
  );
};
export default withAuth(Jadwal);
