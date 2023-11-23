import Avatar from "@/components/profile/avatar";
import ButtonUpdate from "@/components/profile/buttonUpdate";
import DescProfile from "@/components/profile/descProfile";
import { withAuth } from "@/middlewares/auth";

const Profile = () => {
  return (
    <main>
      <Avatar>
        <ButtonUpdate />
        <DescProfile />
      </Avatar>
    </main>
  );
};

export default withAuth(Profile);
