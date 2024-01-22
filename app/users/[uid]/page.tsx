import UserProfile from "@/components/UserProfile";
import { fetchUsers } from "@/app/users/requests";
import { User } from "@/app/types";
import { formatDOB, fullAddress, fullName } from "@/app/utilities";

export type UserProfileProps = {
  imgUrl: string;
  name: string;
  age: number | string;
  address: string;
  email: string;
  phone: string;
  dob: string;
};

type ParamsProps = {
  params: { uid: string };
};

export default async function UserProfilePage({ params }: ParamsProps) {
  const users: User[] = await fetchUsers();
  const user = users.find(user => user.login.uuid === params.uid);

  if (user) {
    const { dob, name, picture } = user;
    const { email, location: { city, postcode, state, street }, phone } = user;
    const fullNameStr = fullName(name);
    const addressStr = fullAddress(street, city, state, postcode);

    return (
      <UserProfile
        imgUrl={picture.large || ''}
        name={fullNameStr}
        age={dob.age || ''}
        address={addressStr}
        email={email}
        phone={phone}
        dob={formatDOB(dob)}
      />
    );
  }

  return null;
}
