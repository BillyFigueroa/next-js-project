import UserProfile from "@/components/UserProfile";

export type UserProfileProps = {
  imgUrl: string;
  name: string;
  age: string;
  address: string;
  email: string;
  phone: string;
  dob: string;
};

type SearcParamProps = {
  params: object;
  searchParams: UserProfileProps;
};

export default function UserProfilePage({ searchParams }: SearcParamProps) {
  return <UserProfile {...searchParams} />;
}
