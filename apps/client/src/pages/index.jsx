import Beranda from "./views/beranda"
import { withAuth } from "@/middlewares/auth";

function Home() {
  return (
    <main>
      <Beranda/>
    </main>
  )
}

export default withAuth(Home)