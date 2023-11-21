import Avatar from "@/components/profile/avatar";
import ButtonUpdate from "@/components/profile/buttonUpdate";
import DescProfile from "@/components/profile/descProfile";

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

export default Profile;
