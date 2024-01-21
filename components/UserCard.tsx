import Image from "next/image";
import Link from "next/link";

import { User } from "@/app/types";

type UserCardProps = {
  user: User;
  displayBorder: boolean;
};

const imageStyles = {
  borderColor: "#777777",
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: 32,
};

export default function UserCard({
  user: {
    dob,
    location: { city, state, street, postcode },
    email,
    name,
    phone,
    picture,
  },
  displayBorder,
}: UserCardProps) {
  const fullName = `${name.first} ${name.last}`;
  const address = `${street.number} ${street.name} - ${city}, ${state} ${postcode}`;

  const profileData = {
    imgUrl: picture.large,
    name: fullName,
    age: dob.age,
    address,
    email,
    phone,
    dob: new Date(dob.date).toISOString().substring(0, 10),
  };

  return (
    <Link
      href={{
        pathname: "/users/user",
        query: profileData,
      }}
    >
      <div className="ml-5">
        <div data-testid="UserCard--border" className={`flex gap-6 py-1.5 ${displayBorder ? "border-t border-gray-200" : ""}`}>
          <Image width={64} height={64} src={picture.large} alt="Profile image" style={imageStyles} />

          <div className="w-fit">
            <p className="text-sm text-gray-700 font-semibold">
              {fullName}
            </p>

            <p className="text-sm text-gray-500 font-extralight">
              <span className="font-normal mr-1">City:</span>
              {city}
            </p>

            <p className="text-sm text-gray-500 font-extralight">
              <span className="font-normal mr-1">Age:</span>
              {dob.age}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
